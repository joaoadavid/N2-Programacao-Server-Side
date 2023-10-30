const mongoose = require('mongoose');

const prestadortSchema = mongoose.Schema({
    codigo_prestador: {type: Number, require: true},
    nome_prestador: {type: String, require: true},
    cpf_prestador: {type: String, require: true},
});

module.exports = mongoose.model('Prestador', prestadortSchema);