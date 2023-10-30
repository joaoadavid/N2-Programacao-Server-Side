const express = require('express');
const prestadorRouter = require('./src/routes/prestador')


require('./config/database')

const app = express();

app.use(express.json());


// nesse formato, define uma pré rota derivando da router
app.use('/prestador', prestadorRouter);//criado


app.listen(3000, () => {
  console.log('Servidor foi iniciado')
})
