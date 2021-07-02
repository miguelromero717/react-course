import { getImagen } from "../../base/11-async-await"

describe('Tests Async Await', () => {
    test('should returns url image', async () => {
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);
    })
    
})