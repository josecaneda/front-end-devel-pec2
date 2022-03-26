let findOne = (list, { key, value }) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  });
};

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' })
  .then(response => onSuccess(response))
  .catch(error => onError(error));

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' })
.then(response => onSuccess(response))
.catch(error => onError(error));

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/


