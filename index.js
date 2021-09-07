const express = require('express')
const app = express()

var current = 0

var instances = [
    //"192.168.1.68:3021"
    "http://localhost:3021"
    //,"http://localhost:3022"
]

app.get('/', (req,res) => {
    const server  = instances[current]
    
    //current > instances.length ? current = 0 : current++
    res.redirect(server)
})

app.listen(3020)