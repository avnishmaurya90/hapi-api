'use strict';

const path = require('path');
const inert = require('inert');
const vision = require('vision');
const pino = require('hapi-pino'); // To Add Basic Logging
const handlebars = require('handlebars');

module.exports.configure = async (server) => {

    await server.register({
        plugin: pino,
        options: {
            prettyPrint: false,
            logEvents: ['response']
        }
    });

    await server.register(inert);
    await server.register(vision);

    server.views({
        engines: {
            html: handlebars
        },
        relativeTo: path.join(__dirname, '../'),
        path: 'views'
    });

}