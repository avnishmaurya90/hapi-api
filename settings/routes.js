'use strict';

const validators = require('../validators')
const demo = require('../api/demo')


module.exports.configure = (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return demo.baseUrl(request, h)
        }
    });

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, h) => {
            return demo.baseUrlWithName(request, h)

        },
        options: {
            validate: validators.demo.validate
        }
    });

    server.route({
        method: ['PUT', 'POST'],
        path: '/',
        handler: (request, h) => {
            return demo.postAndPutRequest(request, h)
        },
        options: {
            description: 'Say hello!',
            notes: 'The user parameter defaults to \'stranger\' if unspecified',
            tags: ['api', 'greeting']
        }
    });

    server.route({
        method: 'GET',
        path: '/picture.jpg',
        handler: function (request, h) {
            return demo.loadImage(request, h)
        }
    });
}