/*
* title: henalde request and response
* author: apurbo howlader
* date: 8/3/2024
*/

// dependecies
const {parse} = require('node:url')
const { StringDecoder } = require('node:string_decoder')
const {routes} = require('../routes')
const { notFoundHandler } = require('../handlers/notFoundHandler')

// module - scaffolding
const handle = {}

// handler req and res
handle.handleRegRes = (req, res) => {
    const url = parse(req.url, true)
    const path = url.pathname.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const header = req.headers
    let data = ''
    const stringDecoder = new StringDecoder('utf-8')

    req.on('data', (buffer) => {
        data += stringDecoder.write(buffer)
    })

    req.on('end', () => {
        data += stringDecoder.end()
    })
    const reqAddData = {
        url,
        path,
        method,
        header,
        data
    }

    const chooseFn = routes[path] ? routes[path] : notFoundHandler

    chooseFn(reqAddData, (statusCode, message) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500
        message = typeof message === 'object' ? message : false

        
        res.statusCode = statusCode
        console.log(message);

        res.write(message.toString())
        res.end()
    })
}


module.exports = handle;
