function multiplyBy10(array) {
  // your code here
  return array.map( x => x * 10);
}

function shiftRight(array) {
  // your code here
  return  array.map( (_value, _index, _array) => {
    if (_index == 0) {
      return _array[_array.length - 1];
    } else {
      return _array[_index - 1];
    }

  });
}

function onlyVowels(array) {
  // your code here
  return array.map(value => {
    return [...value].map(_value => {
      switch(_value) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
          return _value;
      }
    }).join('');
  });
}

function doubleMatrix(array) {
  // your code here
  return array.map(value => {
    return value.map(_value =>  _value * 2);
  });
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
