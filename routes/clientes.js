const express = require('express')
const route = express.Router()

route.get('/parcelas', (req,res) => {
    x = 16
    res.send(`Você ainda possuí ${x} parcelas restantes!`)
})

route.post('/pagamento', (req, res) => {
    res.send('Pagamento feito com sucesso! \nParcelas restantes: ', x--)
})

route.put('/atualizar', (req, res) => {
    res.send('Número de parcelas atualizado!')
})

route.delete('/deletar', (req, res) => {
    if (x == 0) {
        res.send("Conta deletada com sucesso!")
    } else { 
        res.send("Para efetuar a exclusão da conta é necessário quitar todas as parcelas restantes!")
    }
})

module.exports = route