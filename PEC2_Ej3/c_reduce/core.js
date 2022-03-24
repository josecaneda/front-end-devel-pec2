function sum(array) {
  // your code here
  const initialValue = 0;
  return array.reduce( (previousValue, currentValue) => previousValue + currentValue, initialValue);

}

function productAll(array) {
  // your code here
  const initialValue = 1;
  return array.reduce( (previousValue, currentValue) => previousValue *
    [...currentValue].reduce( (_previousValue, _currentValue) => _previousValue * _currentValue, initialValue )
    , initialValue );

}

function objectify(array) {
  // your code here
  //return Object.fromEntries(array);
  return array.reduce((acc, [title, decade]) => {
    acc[title] = decade;
    return acc;
  }, {});
}

function luckyNumbers(array) {
  // your code here
  const initialValue = 'Your lucky numbers are:';
  let selectSeparator = (index, arrayLength) => {
    if (index + 1 == arrayLength) return '';
    if (index + 2 == arrayLength) return ', and';
    return ','
  };
  
  return array.reduce( (previousValue, currentValue, index) => 
    `${previousValue} ${currentValue}${selectSeparator(index, array.length)}`
    , initialValue);
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
