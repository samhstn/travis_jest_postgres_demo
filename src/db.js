const { Client } = require('pg');

let connectionString = process.env.DATABASE_URL
  || 'postgres://postgres:@localhost:5432/travis_jest_postgres_demo_dev';

if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.TEST_DATABASE_URL
    ||'postgres://postgres:@localhost:5432/travis_jest_postgres_demo_test';
} 

const db = new Client({ connectionString })

db.connect()

module.exports = db;
