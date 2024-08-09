/*
 * title: read handler
 * author: apurbo howlader
 * date: 8/9/2024
 */

// dependncies
const { readFile } = require('node:fs');
const { join } = require('node:path');
// const {} = require('../../.data')

const baseUrl = join(__dirname, '../../.data');

const createHandler = (file, dir, callback) => {
    // file readed
    readFile(`${baseUrl}/${file}/${dir}.json`, 'utf-8', (err, data) => {
        if (!err) {
            callback(data);
        } else {
            // file is not found
            callback('file is not found!');
        }
    });
};

module.exports = createHandler;
