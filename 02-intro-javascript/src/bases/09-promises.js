// Promises
import { getHeroById } from './bases/08-imp-exp-array-func'

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroById(1);
        resolve(hero);
    }, 2000);
});

promise.then((hero) => {
    console.log(hero);
});
