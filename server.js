const express = require("express")
const app = express()

const veiculoRoute = require('./routes/veiculos')
const clienteRoute = require('./routes/clientes')

const port = 8080;
const hostname = '127.0.0.1'

app.get('/', (req, res) => {
    res.send('Seja bem vindo à sua concessionária favorita!')
});

app.use('/veiculos', veiculoRoute)
app.use('/clientes', clienteRoute)

app.listen(port, hostname, console.log(`Servidor rodando em: ${hostname}:${port}`))
