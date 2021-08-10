console.log('hello');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Dudes!')
});

app.get('/dudes', (req, res) => {
    res.send(`what's up dudes? ${req.query.name}`);
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

