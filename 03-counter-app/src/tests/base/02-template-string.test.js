import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('template string test', () => {
    test('test getSaludo function', () => {

        const name = 'Miguel';

        const saludo = getSaludo(name);

        expect(saludo).toBe('Hola ' + name);

    })

    test('test getSaludo without argument', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    })
    

})
