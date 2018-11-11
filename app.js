const express = require('express');
const morgan = require('morgan');
const postBank = require('./postBank');
const postDetails = require('./postDetails');
const postList = require('./postList');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const posts = postBank.list();
  res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {
  const post = postBank.find(req.params.id);

  res.send(postDetails(post));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
