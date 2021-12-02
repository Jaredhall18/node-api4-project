require('dotenv').config()

const express = require('express')

const server = express()
server.use(express.json())

const PORT = process.env.PORT || 8000

server.get('/api/users', (req, res) => {
    res.json([
        {id: 1, username: 'test1'},
        {id: 2, username: 'test2'},
        {id: 3, username: 'test3'},
    ])
})




server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})