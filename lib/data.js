/*
* title: henalde crud operation
* author: apurbo howlader
* date: 8/8/2024
*/

// dependencies

const {join} = require('node:path')
const createHandler = require('./_libHandler/createHandler')


// module - scaffoding
const lib = {}

lib.baseUrl = join(__dirname, '../.data')

// create operation
lib.create = createHandler


// exporet module
module.exports = lib;
