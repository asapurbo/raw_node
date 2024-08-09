/*
 * title: deleted handler
 * author: apurbo howlader
 * date: 8/9/2024
 */

// dependncies
const { readFile, unlink } = require('node:fs');
const { join } = require('node:path');
// const {} = require('../../.data')

const baseUrl = join(__dirname, '../../.data');

const deletedHandler = (file, dir, callback) => {
    // file deleted
    unlink(`${baseUrl}/${file}/${dir}.json`, (err) => {
        if(!err) {
            callback(true)
        } else {
            // The file is not deleting
            callback('The file is not deleting!')
        }
    })
};

module.exports = deletedHandler;
