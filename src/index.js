const express = require('express'); // importador  servidor Http
const professores = require('../src/arrays');

const app = express();

app.get('/', (req, resp) => {
   resp.send('Hello World!! This is my first server...')  //resposta verbo get Http 
});

//localhost:3000/professores
app.get('/professores', (req, resp) => {
   const { stack } = req.query;  // paramentro de consulta
   let resultado = professores;

   if (stack) {
      resultado = professores.filter((professor) => {
         return professor.stack === stack;
      });
   }
   resp.send(resultado);
});

//localhost:3000/professores/4
app.get('/professores/:id', (req, resp) => {
   const professorId = professores.find((professor) => {
      return professor.id === Number(req.params.id); // paramentros de rotas
   });
   resp.send(professorId);
});



app.listen(3000); //porta do servidor