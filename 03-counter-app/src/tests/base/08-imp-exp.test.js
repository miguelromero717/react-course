import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Test import export', () => {  

    test('should returns hero by Id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        const heroData = heroes.find(h => h.id === id);

        expect(hero).toEqual(heroData);
    })

    test('should returns undefined if hero does not exist', () => {
        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
    })

    test('should returns array DC Heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    })

    test('should returns array Marvel Heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    })

})
