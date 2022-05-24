const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/index.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '/db/db.json'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/notes.html'));
});



app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    noteList.push(newNote);
    updateDb();
    return console.log('You saved a new note!')
});

app.delete("/api/notes/:id", (req, res) => {
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteId = (req.params.id).toString();
    noteList = noteList.filter(selected =>{
        return selected.id != noteId;
    })
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
});



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}! 🚀`)
);