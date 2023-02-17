const express = require('express');
const path = require('path');
const app = express();
const consoleLog = require('./practice-middleware.js');

//consoleLog;
app.use(consoleLog);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './new-public/index.html'));
});

app.get('/sample', (req, res) => {
  res.status(200).send('This is working.');
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000...');
});
