/*
* title: about handlrs
* author: apurbo howlader
* date: 8/3/2024
*/

// dependecies

// module-scaffolding
const hanlder = {}

// about handler function
hanlder.aboutHandler = (reqdata, callback) => {
    callback(200, {
        message: 'it is about page'
    })
}

// exprots module
module.exports = hanlder;
