const express = require ('express');
const videoRouter = require('./routes/videoRoutes');
const app = express();
const port = process.env.PORT || 3000;

// Para uso do json
app.use(express.json());

// Definição das rotas
app.use('/videos', videoRouter);


// inicializando o servidor
app.listen(port,() =>{
    console.log(`Server running in port ${port}!`)
});