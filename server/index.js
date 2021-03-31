const express = require('express');
const bc = require('./controllers/books_controller');

const app = express();

app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));