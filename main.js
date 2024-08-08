/*
* title: node project
* description: it is raw node project
* author: apurbo howlader
* date: 8/3/2024
*/

// dependencies
const { createServer } = require('node:http')
const { handleRegRes } = require('./helpers/handleReqRes')
const { create } = require('./lib/data')

// object - module-scaffolding
const app = {}

// configuration file
const confi = {
    port: 9000
}

// for checking
create('users', 'someting', {'name': 'apurbo', 'email': 'cstapurbo@gmail.com'}, (err) => {
    console.log(err);
    
})

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
