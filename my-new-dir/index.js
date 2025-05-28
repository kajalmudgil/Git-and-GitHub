const express = require('express');
const app = express();

// Define the port variable
const port = 3000; // You can use any available port number

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});