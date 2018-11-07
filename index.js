const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/api/data', (req, res) => {
  res.send({ data: 'Some data'});
});

// Si la aplicación se ejecuta en un entorno de producción:
if (process.env.NODE_ENV === 'production') {
  // Toma el contenido de /build de la app React como su fuente
  // de páginas estáticas
  app.use(express.static('client/build'));
  // Importa el procesador de paths
  const path = require('path');
  //
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 5000);