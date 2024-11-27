const handler = require('../api/greeting');

describe('Azure Function Handler', () => {
    test('should return the correct greeting message', async () => {
        const request = {};
        const context = {};

        const response = await handler(request, context);

        expect(response).toEqual({ body: 'This is a greeting from the backend!' });
    });
});
