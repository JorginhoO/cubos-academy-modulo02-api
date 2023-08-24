const express = require('express'); // importador  servidor Http
const professores = require('../src/arrays');
const professor = require('../src/arrays');

const app = express();

app.get('/', (req, resp) => {
   resp.send('Hello World!! This is my first server...')  //resposta verbo get Http 
});

app.get('/professores', (req, resp) => {
   resp.send(professor);
});

app.get('/professores/:id', (req, resp) => {
   const professorId = professor.find((professores) => {
      return professores.id === Number(req.params.id);
   });

   resp.send(professorId);

});

app.listen(3000); //porta do servidor