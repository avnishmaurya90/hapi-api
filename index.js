'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

require('./settings/routes').configure(server);

const init = async () => {
    await require('./settings/hapi').configure(server); //configuring plugins. (cannot be started before plugins finished registration)
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init(); 