require('dotenv').config()

const express = require('express')

const server = express()
server.use(express.json())

const PORT = process.env.PORT || 8000

const testData = [
    {username: 'test1', password:"testpass"},
    {username: 'test2', password:"testpass"},
    {username: 'test3', password:"testpass"},
]

server.get('/api/users', (req, res) => {
    res.json(testData)
})

server.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(500).json({
            message: "the information sent is incorrect"
        })
    } else {
        res.status(210).json(req.body)
    }
})



server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})