// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some( value => value > 10 );
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some( value => value.length > 10 );
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some( value => value.some( _value => _value));
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some( value => value.indexOf('Lost') > -1);
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
