
const delayTest = require('./delay');

describe('delay', () => {
    test('delay', async () => {
        const sum = await delayTest(() => 5 + 5, 1000);
        expect(sum).toBe(10);
    })
});