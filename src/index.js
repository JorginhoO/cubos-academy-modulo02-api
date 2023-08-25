const express = require('express');
const rotas = require('../src/rotas/rotas');

const app = express();

app.use(express.json());      //aplicação receber apenas notações (dados) json

app.use(rotas);   //receber todos dados do arquivo rotas.js


app.listen(3000)