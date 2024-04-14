import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from the server side...');
});

app.post('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: req.body,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port 3000... ');
});
