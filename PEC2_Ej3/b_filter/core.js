function onlyEven(array) {
  // your code here
  return array.filter( value => value % 2 === 0);
}

function onlyOneWord(array) {
  // your code here
  return array.filter( value => value.indexOf(' ') === -1);
}

function positiveRowsOnly(array) {
  // your code here
  return array.filter( value => value.filter( _value => _value >= 0).length === value.length );
}

function allSameVowels(array) {
  // your code here
  return array.filter( value => {
    let searchVowel = 0;
    if (value.indexOf('a') > -1 )  searchVowel +=  1;
    if (value.indexOf('e') > -1 )  searchVowel +=  2;
    if (value.indexOf('i') > -1 )  searchVowel +=  8;
    if (value.indexOf('o') > -1 )  searchVowel +=  16;
    if (value.indexOf('u') > -1 )  searchVowel +=  32;
    if (searchVowel === 1 || searchVowel === 2 || searchVowel === 8 || searchVowel === 16 || searchVowel === 32) {
      return value;
    }
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
