const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/posts', require('./routes/posts'));

app.get('/', (req, res) => {
  res.redirect('/posts');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
