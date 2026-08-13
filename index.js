require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hello from the other side...🎶!');
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});