const express = require('express'); // importador  servidor Http

const { buscarProfessores, buscarIdProfessores } = require('../src/controladores/professores');

const app = express();

app.get('/', (req, resp) => {
   resp.send('Hello World!! This is my first server...')  //resposta verbo get Http 
});

//localhost:3000/professores
app.get('/professores', buscarProfessores);

//localhost:3000/professores/4
app.get('/professores/:id', buscarIdProfessores);



app.listen(3000); //porta do servidor