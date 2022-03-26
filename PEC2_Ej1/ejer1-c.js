let findOne = (list, { key, value }) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? resolve(element) : reject(({ msg: 'ERROR: Element Not Found' }));
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

async function asyncCall() {
  console.log('findOne success');
  try {
    const user1 = await findOne(users, { key: 'name', value: 'Carlos' });
    onSuccess(user1);
  } catch (error) {
    onError(error);
  }
  
  console.log('findOne error');
  try {
    const user2 = await findOne(users, { key: 'name', value: 'Fermin' });
    onSuccess(user2)
  } catch(error) {
    onError(error);
  }
}

asyncCall();

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/


