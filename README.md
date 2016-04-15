# testing-server-express-mocha-supertest

New instance of server on each unit test.

Remove the cache every time server is required.

        delete require.cache[require.resolve('./app')];
