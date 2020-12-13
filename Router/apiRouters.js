//Dependencies

const fs = require('fs');
const path = require('path');
const notes = require("../db/db.json");
//The source for uuid is: https://stackoverflow.com/
//questions/23327010/how-to-generate-unique-id-with-node-js
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
       
        res.json(notes);
    });

    let newId = uuidv4();
    app.post("/api/notes", function(req, res) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: newId
          };

  notes.push(newNote);

  res.json(newNote);
    
    });
  
 
    app.delete("/api/notes", function(req, res) {
  
    });
  
  };
  
