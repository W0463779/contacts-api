import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

import contactsRouter from './routes/contacts.js';
app.use('/api/contacts', contactsRouter);

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


