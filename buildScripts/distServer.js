import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
// removed webpack related packages as we will be serving static files for production
/* eslint-disable no-console */
const port = 9000;
const app = express();

app.use(compression()); //this enables gzip compressions in express;
app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

// commenting this so that production api deployed at heroku is used
// app.get('/users', function(req, res) {
//   // Hard coding for simplicity. Pretend this hits a real database
//   res.json([
//     {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
//     {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
//     {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
//   ]);
// });
