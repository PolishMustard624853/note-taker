const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const noteList = require('./db/db.json');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});



app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    noteList.push(newNote);
    updateDb();
    return console.log('You saved a new note!')
});

app.get('/api/notes', (req, res) => {
    res.json(noteList);
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}! 🚀`)
);