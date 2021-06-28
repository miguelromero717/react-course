// Literal objects

const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'NY',
        zipcode: 2223333,
        lat: 13.222,
        lon: 34.445
    }
};

console.log(person.name);
console.log(person.lastName);
console.log(person.age);

const personTwo = {...person};
personTwo.name = 'Peter';

console.log({ person });
console.log(personTwo);