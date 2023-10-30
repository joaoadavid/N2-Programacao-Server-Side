const express = require('express');
const prestadorRouter = require('./src/routes/prestador')


require('./config/database')

const app = express();

app.use(express.json());

app.use('/prestador', prestadorRouter);

app.listen(3000, () => {
  console.log('Servidor foi iniciado')
})
