import heroes from '../data/heroes';

console.log(heroes);

const getHeroById = (id) => heroes.find(h => h.id === id);
console.log(getHeroById(2));

const getHeroByOwner = (owner) => heroes.filter(h => h.owner === owner);
console.log(getHeroByOwner('DC'));