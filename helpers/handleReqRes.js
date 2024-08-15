/*
 * title: henalde request and response
 * author: apurbo howlader
 * date: 8/3/2024
 */

// dependecies
const { parse } = require('node:url');
const { StringDecoder } = require('node:string_decoder');
const { routes } = require('../routes');
const { notFoundHandler } = require('../handlers/notFoundHandler');
const { parseJSON } = require('../utils/parseJson');

// module - scaffolding
const handle = {};

// handler req and res
handle.handleRegRes = (req, res) => {
    const url = parse(req.url, true);
    const path = url.pathname.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const header = req.headers;
    const queryData = url.query;
    let data = '';
    const stringDecoder = new StringDecoder('utf-8');

    const reqAddData = {
        url,
        path,
        method,
        header,
        queryData
    };

    const chooseFn = routes[path] ? routes[path] : notFoundHandler;


    req.on('data', (buffer) => {
        data += stringDecoder.write(buffer);
    });

    req.on('end', () => {
        data += stringDecoder.end();
        reqAddData.body = parseJSON(data)

        chooseFn(reqAddData, (statusCode, message) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            message = typeof message === 'object' ? message : false;

            res.setHeader('Content-Type', 'application/json');

            res.statusCode = statusCode;

            res.write(JSON.stringify(message));
            res.end();
        });

    });

};

module.exports = handle;
