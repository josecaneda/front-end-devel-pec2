// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every( value => value % 2 == 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  const type = typeof(input[0]); 
  return input.every( value => typeof(value) === type );
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every( value => [...value].every( _value => _value >= 0 ));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every( value => {
    let searchVowel = 0;
    let result = false
    if (value.indexOf('a') > -1 )  searchVowel +=  1;
    if (value.indexOf('e') > -1 )  searchVowel +=  2;
    if (value.indexOf('i') > -1 )  searchVowel +=  8;
    if (value.indexOf('o') > -1 )  searchVowel +=  16;
    if (value.indexOf('u') > -1 )  searchVowel +=  32;
    
    if (searchVowel === 1 || searchVowel === 2 || searchVowel === 8 || searchVowel === 16 || searchVowel === 32) {
      result = true;
    } 
    return result;
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
