
function myMap (arr, cB) {
  let output= [];
  for (let i =0; i < arr.length; i++) {
    output.push(cB(arr[i]));
  }
  return output;
}



var words = ["ground", "control", "to", "major", "tom"];

let wordLength = myMap(words, function(word) {
  return word.length;
});

let wordUpper = myMap(words, function(word) {
  return word.toUpperCase();
});

let wordReverse = myMap(words, function(word) {
  return word.split('').reverse().join('');
});


console.log(wordLength);
console.log(wordUpper);
console.log(wordReverse);






