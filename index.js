
require('dotenv').config

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/th', (req, res) => {
    res.send('om rajput');
});

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code </h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h1>youtube </h1>'); // Fixed the typo here
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
