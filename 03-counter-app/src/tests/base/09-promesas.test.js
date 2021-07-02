import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Promesas tests', () => {
    test('should returns hero async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(h => {
                expect(h).toBe(heroes[0]);
                done();
            });
    });

    test('should returns error if hero does not exist', ( done ) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });

})
