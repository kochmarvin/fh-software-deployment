const { app } = require('@azure/functions');

const handler = async (request, context) => {
    return { body: 'This is a greeting from the backend!' };
};

app.http('greeting', {
    methods: ['POST', 'GET'],
    handler: handler
});

module.exports = handler;
