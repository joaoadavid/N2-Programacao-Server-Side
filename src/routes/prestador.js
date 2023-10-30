const express = require('express');

const router = express.Router();//permite criar rotas no arquivo.

const Prestador = require('../models/prestador')

//CONSULTA TODOS OS PRESTADORES
router.get('/', async (req, res) => {
  try{
    let prestador = await Prestador.find({});
    res.status(200).json(prestador);
    }catch(error){
      res.status(422).json(error);//houve um problema na requisição do cliente.
    }
})
router.get('/nome_prestador', async (req, res) => {
  try {
    let prestadores = await Prestador.find({}, 'nome_prestador'); // Apenas traz o campo 'nome_prestador'
    res.status(200).json(prestadores);
  } catch (error) {
    res.status(500).json(error); // Erro interno do servidor
  }
});
//ADICIONA UM NOVO PRESTADOR
router.post('/', async (req, res) => {
  let {codigo_prestador, nome_prestador, cpf_prestador} = req.body;

  try {
      let prestador = await Prestador.create({codigo_prestador, nome_prestador, cpf_prestador});
      res.status(200).json(prestador);
  } catch (error) {
      res.status(422).json(error);
  }  
})
//TRAZ UM PRESTADOR PELO ID
router.get('/:id', async (req, res) => {
  try{
  let prestador = await Prestador.findById(req.params.id);
    res.status(200).json(prestador);
    }catch(error){
      res.status(422).json(error);//houve um problema na requisição do cliente.
    }
})
//ATUALIZA INFORMAÇÕES DO PRESTADOR
router.put('/:id', async (req, res) => {
  let  {codigo_prestador, nome_prestador, cpf_prestador } = req.body;
  
  try{
    let prestador = await Prestador.findByIdAndUpdate(req.params.id, 
      {codigo_prestador, nome_prestador, cpf_prestador}, {new:true});
    res.status(200).json(prestador);
  }catch{
    res.status(422).json(error);//houve um problema na requisição do cliente.
  }
})

//DELETA AS INFORMAÇÕES PELO ID
router.delete('/:id', async (req, res) => {
  try{
    let prestador = await Prestador.findByIdAndRemove(req.params.id);
    res.status(200).json(prestador);
  }catch{
    res.status(422).json(error);//houve um problema na requisição do cliente.
  }
})


module.exports = router;
