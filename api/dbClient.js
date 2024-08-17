const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'secret',
    database: 'postgres'
});

client.connect();

module.exports = client;

