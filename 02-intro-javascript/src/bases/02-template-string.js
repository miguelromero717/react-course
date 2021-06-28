// Template string
const myName = 'Miguel';
const lastName = 'Romero';

const fullName = `${myName} ${lastName} ${1 + 1}`;

console.log(fullName);

function sayHi(name){
    return 'Hi you ' + name;
}

console.log(`This is a text: ${sayHi(fullName)}`);