console.log('hello');

const express = require('express');
const app = express();
const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello Dudes!')
});

app.get('/dudes', (req, res) => {
    res.json(data);

});

app.get('/dudes/:1', (req, res) => {
    const dudeId = Number(req.params.id);
    const dude = data.find((item) => item.id === req.params.id);
    res.json(dude);

})

module.exports = app;