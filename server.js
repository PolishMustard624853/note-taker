const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}!`)
);
