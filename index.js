console.log('hello');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello Dudes!')
});

app.get('/dudes', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

