import heroes from '../data/heroes';

// console.log(heroes);

export const getHeroById = (id) => heroes.find(h => h.id === id);
// console.log(getHeroById(2));

export const getHeroByOwner = (owner) => heroes.filter(h => h.owner === owner);
// console.log(getHeroByOwner('DC'));