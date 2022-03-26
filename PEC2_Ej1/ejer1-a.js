//  Se crea la función findONe que recibe las siguientes entradas
// un array list
// Objeto {key value}
// Objeto con dos funciones.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  // Función que se ejecutará al pasar 2 segundos.
  setTimeout(() => {
    // Se buscará un objeto en la lista que tenga como la clave y valor que se pasaron en la entrada.
    const element = list.find(element => element[key] === value);
    // Si el objeto se encuentra se ejecuta la función onSuccess si no se encuentra se encuentra el objeto onError
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

// Se crean las funciones onSuccess y onError
const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

// Se crea el array de objetos
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

// Uso de findOne en el que se encuentra el valor
console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

// Uso de findONe en el que no se encuentra el valor
console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
