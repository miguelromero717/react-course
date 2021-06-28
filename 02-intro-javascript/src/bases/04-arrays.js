// Arrays

const array = [1,2,3,4];
let arrayTwo = [...array, 5];
const arrayThree = arrayTwo.map((a) => {
    return a * 2;
});

console.log(array);
console.log(arrayTwo);
console.log(arrayThree);