const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

//In quanto se è vero che person1 e person2 sono uguali, modificare una variabile in uno
//modificherà la stessa nell'altro. Questo ovviamente succede perchè stampiamo il contenuto delle due person subito dopo la modifica
//Se usassimo il console.log(person1) prima del person2.firstName = 'Simon', avremmo person 1 con i suoi valori e solo person2 col nome modificato