const app = require('./app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

