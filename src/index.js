const express = require('express'); // importador  servidor Http

const app = express();

app.get('/', (req, resp) => {
   resp.send('Hello World!! This is my first server...')  //resposta verbo get Http 
});

app.listen(3000) //porta do servidor