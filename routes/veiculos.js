// Importação das bibliotecas necessárias
const express = require('express')
const route = express.Router()

// Configuração de rotas
route.get('/disponiveis', (req,res) => {
    res.send("Sedans: Onix Plus, Prisma, Siena \nOHatch: Onix, Mobi, HB20")
})

route.post('/comprar', (req, res) => {
    res.send("Insira seu Cpf e Data de Nascimento para prosseguir!")
})

route.put('/trocar', (req, res) => {
    res.send("Para efetuar a troca, é necessário contactar um vendedr!")
})

route.delete('/cancelar', (res, req) => {
    res.send("Seu pedido de cancelamento foi enviado para a analise...")
})

// Exportação das rotas
module.exports = route