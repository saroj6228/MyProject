const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Books = require('./BooksSchema');
require('./MongoDBConnect');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// REST API Endpoints
app.get('/allbooks', (req, res) => {
    Books.find((err, books) => {
        if (err) return res.status(500).send(err);
        res.json(books);
    });
});

app.get('/getbook/:id', (req, res) => {
    Books.findById(req.params.id, (err, book) => {
        if (err) return res.status(500).send(err);
        res.json(book);
    });
});

app.post('/addbooks', (req, res) => {
    const newBook = new Books(req.body);
    newBook
        .save()
        .then(() => res.status(200).json({ message: 'Book added successfully' }))
        .catch((err) => res.status(400).send('Failed to add book'));
});

app.post('/updatebook/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBook) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Book updated successfully', updatedBook });
    });
});

app.post('/deletebook/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Book deleted');
    });
});

// Start Server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
