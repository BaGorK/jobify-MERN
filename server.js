import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello from the server side...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port 3000... ');
});
