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

async function asyncFindOne(list, { key, value }) {
  try {
    const user = await findOne(list, { key, value });
    onSuccess(user);

  } catch(error) {
    onError(error);
  }
}
  
console.log('findOne success');
asyncFindOne(users, { key: 'name', value: 'Carlos' });
console.log('findOne error');
asyncFindOne(users, { key: 'name', value: 'Fermin' });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/


