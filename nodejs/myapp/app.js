const express = require('express')

const app = express()

// on GET request to the url
app.get('/todos', (req, res) => res.send("You sent a GET request!!"))

// on POST request to the same url
app.post('/todos', (req, res) => res.send("You sent a POST request!!"))

// start server on port 3000
app.listen(3000, () => console.log('Example app listening on port 3000!'))