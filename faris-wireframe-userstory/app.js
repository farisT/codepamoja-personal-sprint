/* eslint no-console: 0 */
const express = require('express');

const app = express();
const path = require('path');

app.set('views', `${__dirname}/views`);
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.html');
});


app.listen(3000, () => {
  console.log('listening to 3000');
});
