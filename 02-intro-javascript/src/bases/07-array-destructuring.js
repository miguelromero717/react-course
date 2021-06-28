// arrays destructuring
const actors = ['Goku', 'Vegeta', 'Trunks'];
const [, p2] = actors;

console.log(p2);

const returnArray = () => {
    return ['ABC', 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

// Task
const functionExample = (value) => {
    return [value, () => { console.log('Hello World') }];
};

const [value, functionCustom] = functionExample('Goku');

console.log(value);
functionCustom();