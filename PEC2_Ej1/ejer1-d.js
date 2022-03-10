let findOne = (list, { key, value }, { onSuccess, onError }) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? resolve(onSuccess(element)) : resolve(onError({ msg: 'ERROR: Element Not Found' }));
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
  let p1 = findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

  console.log('findOne error');
  let p2 = findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  await Promise.all([p1, p2]);
}

asyncCall();

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/


