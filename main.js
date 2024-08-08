/*
* title: node project
* description: it is raw node project
* author: apurbo howlader
* date: 8/3/2024
*/

// dependencies
const { createServer } = require('node:http')
const { handleRegRes } = require('./helpers/handleReqRes')

// object - module-scaffolding
const app = {}

// configuration file
const confi = {
    port: 9000
}


// create server
app.createServer = () => {
    createServer(app.handleRegRes).listen(confi.port, () => {
        console.log('server is listening port on http://localhost:9000/');
    })
}


// handle request and response
app.handleRegRes = handleRegRes
// create function called
app.createServer()
