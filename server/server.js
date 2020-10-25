const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.use(cors());


app.get('/', (req, res) => {
    res.send('hello');
})

app.get('/test', (req, res) => {
    res.send('You pass the test!');
})

app.get('/test2', (req, res) => {
    res.send('You pass the second test!');
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;