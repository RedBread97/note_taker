const note= require('express').Router();
//import all function from helpers.
const { readAndAppend, readFromFile } = require('./helper/helper')

note.get('/', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


note.post('/', (req, res) =>{
    const {title, text, id} = req.body;

    if (req.body) {
const newNote = {
    title,
    text,
    id
};

    readAndAppend(newNote, './db/db.json');
    res.json('note has been added');
    }else {
        res.error('error adding new note');
    }
});

module.exports = note;
