const express = require('express')
const App = express()
const port = 8080;

App.get('/ping', (req, res) => {
    res.send('<h1>Pong</h1>')
}) 

App.listen(port, () => console.log('App is starting', port))