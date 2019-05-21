const express = require('express');

module.exports = (db) => {
  const app = express();

  app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.sendFile('index.html');
  });

  app.get('/api/comments', (req, res) => {
    db.query('SELECT * FROM comments')
      .then((rows, args) => {
        res.json({rows});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({error: '500'});
      });
  });

  return app;
}
