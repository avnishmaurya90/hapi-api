# hapi-api

This Project Skelton will help you out to understand what hapi is. 

**Installation**

###  `npm install hapi`

**Usage**

```const hapi = require('hapi')```

- Step 1: Creating Server.

    `const server = Hapi.server({host: 'localhost', port: 8000});`

    This will set server on port 8000, we can set any number of free port available on system.

    `server.start();` //there might comes error while starting server. That must be taken care of

    this will start server on the port we assign and communication starts over it.

- Step 2: Add Route

    ```
    server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return demo.baseUrl(request, h)
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
        
    ```

    *`method:`* REST methods(type of requests)

    *`path:`* describes the path of URL

    *`handler:`* here is function with request and h paramters to handle request and to provide response.

    *`options:`* this is where you configure things like validation, authentication, prerequisites, payload processing, and caching options

- Step 3: Validation.

    joi module is used for validation. We can use it as given below.

    *`const joi = require('joi');`*


    ```
    server.route({
            method: 'GET',
            path: '/{name}',
            handler: (request, h) => {
                return demo.baseUrlWithName(request, h)

            },
            options: {
                validate: {
                    params: {
                        name: joi.string().min(3).max(10)
                    }
                }
            }
        });
    ```    

- Step 4: Logging

    *`const pino = require('hapi-pino');`*

    **Is Used For Basic Logging**

    ```
    await server.register({
            plugin: pino,
            options: {
                prettyPrint: false,
                logEvents: ['response']
            }
        });
    ```


- Step 5: To Load static files

    *`const inert = require('inert');`*

    **inert module is use to load static files.**

    For this we need to register this plugin.

    *`server.register(inert);`*

    ```
    server.route({
            method: 'GET',
            path: '/picture.jpg',
            handler: function (request, h) {

                return h.file('/path/to/picture.jpg');
            }
        });

    ```

- Step 6: View Rendering.

    vision module is used to render views.

    *`const vision = require('vision');`*

    To use this, this plugin must be registered.

    *`await server.register(vision);`*

    ```
    server.views({
            engines: {
                html: handlebars //equire('vision');
            },
            relativeTo: path.join(__dirname, '../'),
            path: 'views'
    });
    ```

*`engines:`* Determines which view engine is to be used 

*`relativeTo:`* Base path for the views directory.

*`path:`* Directory name here
