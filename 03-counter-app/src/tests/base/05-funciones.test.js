import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('05-funciones Tests', () => {
    test('getUser should returns an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUserActivo should returns an object', () => {
        const name = 'Miguel';
        const userActiveTest = {
            uid: 'ABC567',
            username: name
        };
        const userActive = getUsuarioActivo(name);

        expect(userActive).toEqual(userActiveTest);
    })


})
