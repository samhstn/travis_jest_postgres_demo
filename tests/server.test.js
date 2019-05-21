const request = require('supertest');
const assert = require('assert');

const db = require('../src/db.js');
const app = require('../src/app.js')(db);
const buildDb = require('../src/db_build.js')(db);

beforeEach((done) => {
  buildDb()
    .then(() => done())
    .catch((err) => console.log('buildDb err', err));
});

afterAll((done) => {
  db.end()
    .then(() => done())
    .catch((err) => {
      console.log('ERR', err);
      done();
    });
});

test('/', (done) => {
  request(app)
    .get('/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
    .catch((err) => {
      console.log('ERR', err);
      done();
    });
});

test('/comments', (done) => {
  db.query('INSERT INTO comments (comment) VALUES (\'first comment\');')
    .then(() => request(app).get('/api/comments'))
    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.rows.rows).toStrictEqual([{comment: 'first comment'}]);
      done();
    })
    .catch((err) => {
      console.log('ERR', err);
      done();
    });
})
