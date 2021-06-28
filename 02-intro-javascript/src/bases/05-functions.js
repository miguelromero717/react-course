// Functions

// Bad practice
function hello(name){
    return `Hola ${name}`;
}

console.log(hello('Miguel'));

///////
const helloGood = (name) => {
    return `Hola ${name}`;
};
console.log(helloGood('Sara'));

const helloGoodTwo = (name) => `Hola ${name}`;
console.log(helloGoodTwo('Martina'));

///////
const getUser = () => ({
        uid: 'ABC123',
        username: 'Nick9090'
});

const user = getUser();
console.log(user);

//// task
const getActiveUser = (name) => ({
    uid: 'ABC567',
    username: name
});
const activeUser = getActiveUser('Miguel');
console.log(activeUser);