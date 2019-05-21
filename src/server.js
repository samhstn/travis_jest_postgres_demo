const db = require('./db.js');
const app = require('./app.js')(db);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
