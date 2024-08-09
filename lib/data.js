/*
* title: henalde crud operation
* author: apurbo howlader
* date: 8/8/2024
*/

// dependencies

const {join} = require('node:path')
const createHandler = require('./_libHandler/createHandler')
const readHandler = require('./_libHandler/readHandler')
const updateHandler = require('./_libHandler/updateHandler')
const deletedHandler = require('./_libHandler/deletedHandler')


// module - scaffoding
const lib = {}

lib.baseUrl = join(__dirname, '../.data')

// create operation
lib.create = createHandler

// read operation
lib.read = readHandler

// update file
lib.update = updateHandler

// deleted file
lib.deleted = deletedHandler

// exporet module
module.exports = lib;
