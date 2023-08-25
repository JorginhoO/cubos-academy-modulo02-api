const express = require('express');
const controladores = require('../controlador/instrutores');
const aulas = require('../controlador/aulas');

const rotas = express();

rotas.get('/instrutores', controladores.listarInstrutores);
rotas.get('/instrutores/:id', controladores.buscarInstrutores);
rotas.post('/instrutores/', controladores.cadastrarInstrutor);
rotas.put('/instrutores/:id', controladores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', controladores.alterarStatusInstrutor);
rotas.delete('/instrutores/:id', controladores.excluirInstrutor);

rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAula);
rotas.get('/aulas', aulas.listarAulas);
rotas.get('/aulas/:id', aulas.buscarAulas);
rotas.get('/instrutores/:idInstrutor/aulas', aulas.buscarAulasInstrutor);

module.exports = rotas;