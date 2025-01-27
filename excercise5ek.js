import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());

app.get('/products', (req, res) => {
  res.json({ message: 'This is the GET product path' });
});
app.post('/products', (req, res) => {
  res.json({ message: 'This is the POST product path and a product was added' });
});
app.patch('/products', (req, res) => {
  res.json({ message: 'This is the PATCH product path and a product was updated' });
});
app.delete('/products', (req, res) => {
  res.json({ message: 'This is the DELETE product path and a product was deleted' });
});
// Routes for 'users'
app.get('/users', (req, res) => {
  res.json({ message: 'This is the GET user path' });
});
app.post('/users', (req, res) => {
  res.json({ message: 'This is the POST user path and a user was added' });
});
app.patch('/users', (req, res) => {
  res.json({ message: 'This is the PATCH user path and a user was updated' });
});
app.delete('/users', (req, res) => {
  res.json({ message: 'This is the DELETE user path and a user was deleted' });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

