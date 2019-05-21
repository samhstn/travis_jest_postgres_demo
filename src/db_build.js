const buildDb = (db) => () => new Promise((resolve, reject) => {
  const sql = `
    BEGIN;

    DROP TABLE IF EXISTS comments CASCADE;

    CREATE TABLE comments (
      comment VARCHAR NOT NULL
    );

    COMMIT;
  `;

  db.query(sql)
    .then(() => resolve())
    .catch((err) => reject(err));
});

module.exports = buildDb;
