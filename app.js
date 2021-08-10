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

app.get('/dudes/:id', (req, res) => {
    const dudeId = Number(req.params.id);
    const dude = data.find((item) => item.id === dudeId);
    res.json(dude);

})

module.exports = app;