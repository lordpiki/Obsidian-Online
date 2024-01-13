// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Simple in-memory database
let notes = [];

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Create a new note
app.post('/api/notes', (req, res) => {
  const { content } = req.body;
  const newNote = { id: notes.length + 1, content };
  notes.push(newNote);
  res.json(newNote);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
