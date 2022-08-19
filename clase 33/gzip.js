const express = require ('express')
const compression = require('compression')

const app = express()

app.use(compression())
app.get('',(req,res)=>{
    const message = 'bienvenido'
    return
})