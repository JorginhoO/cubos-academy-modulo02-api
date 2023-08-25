const express = require('express');
const controladores = require('../controlador/instrutores');

const rotas = express();

rotas.get('/instrutores', controladores.listarInstrutores);
rotas.get('/instrutores/:id', controladores.buscarInstrutores);
rotas.post('/instrutores/', controladores.cadastrarInstrutor);
rotas.put('/instrutores/:id', controladores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', controladores.alterarStatusInstrutor);
rotas.delete('/instrutores/:id', controladores.excluirInstrutor);


module.exports = rotas;