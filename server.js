// Importação das bibliotecas necessárias
const express = require("express")
const app = express()

// Importação das rotas
const veiculoRoute = require('./routes/veiculos')
const clienteRoute = require('./routes/clientes')

// Configuração do host
const port = 8080;
const hostname = '127.0.0.1'


// Configuração de rotas 
app.get('/', (req, res) => {
    res.send('Seja bem vindo à sua concessionária favorita!')
});

app.use('/veiculos', veiculoRoute)
app.use('/clientes', clienteRoute)

// Hospedagem do servidor
app.listen(port, hostname, console.log(`Servidor rodando em: ${hostname}:${port}`))
