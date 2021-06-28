// object destructuring
const person = {
    name: 'Tony',
    age: 45,
    password: 'Ironman'
};

const { name, age, password } = person;

console.log(name);
console.log(age);
console.log(password);

// With functions
const getPerson = ({ name, password, age, range = 'General' }) => {
    // console.log(name, password, range);
    return {
        secretName: password,
        age: age
    };
};
const { secretName, age:ageTwo } = getPerson(person);

console.log(secretName, ageTwo);