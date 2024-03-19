const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hola mundo')
})

const port = 2000;

app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})
