/*
* title: not found handlrs
* author: apurbo howlader
* date: 8/3/2024
*/

// dependecies

// module-scaffolding
const hanlder = {}

// about handler function
hanlder.notFoundHandler = (reqdata, callback) => {
    callback(404, {
        message: 'it was not found'
    })
}

// exprots module
module.exports = hanlder;
