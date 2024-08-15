/*
* title: node project
* description: it is raw node project
* author: apurbo howlader
* date: 8/3/2024
*/

// dependencies
const { createServer } = require('node:http')
const { handleRegRes } = require('./helpers/handleReqRes')
const { create, update, deleted } = require('./lib/data')
const {currentEnv} = require('./handlers/envt')

// object - module-scaffolding
const app = {}


// create server
app.createServer = () => {
    createServer(app.handleRegRes).listen(currentEnv.port, () => {
        console.log(`server is listening port on http://localhost:${currentEnv.port}/`);
    })
}


// handle request and response
app.handleRegRes = handleRegRes
// create function called
app.createServer()
