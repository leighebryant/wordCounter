var string = "The other two, slight air, and purging fire, Are both with thee, wherever I abide, The first my thought, the other my desire, These present-absent with swift motion slide. For when these quicker elements are gone In tender embassy of love to thee, My life being made of four, with two alone, Sinks down to death, oppressed with melancholy. Until life's composition be recured, By those swift messengers returned from thee, Who even but now come back again assured,Of thy fair health, recounting it to me. This told, I joy, but then no longer glad, I send them back again and straight grow sad.";
console.log(string);

function wordCounter(sonnetString){

  var lowercaseSonnet = sonnetString.toLowerCase();
  console.log(lowercaseSonnet);

  var punctuationless = lowercaseSonnet.replace(/[.,\/#!$%\'^&\*;:{}=\-_`~()]/g, "");
  var finalSonnet = punctuationless.replace(/\s{2,}/g, " ");
  console.log(finalSonnet);

  var splitSonnet = finalSonnet.split(' ');
  console.log(splitSonnet);

  var sonnetList = {};
  // console.log(sonnetList);

  var index = 0;
  // splitSonnet.length


  while (splitSonnet.length > index){  //only if this is true
      if (splitSonnet[index].length > 1){
        sonnetList[splitSonnet[index]] = 0;
      }
   //add this splitSonnet array item to sonnetList object as a property
    index++;
  }
  console.log(sonnetList);
  console.log(splitSonnet);

  //cycle through sonnetList and count value of each word

  for (var word in sonnetList){
    index = 0;
    while (splitSonnet.length > index){
      if (word === splitSonnet[index]){
        sonnetList[word] += 1;
      }
      index++;
    }
  }
  console.log(sonnetList);
}

wordCounter(string);
