/*
* title: henalde request and response
* author: apurbo howlader
* date: 8/8/2024
*/

// dependncies
const {open, writeFile,close} = require('node:fs')
const {join} = require('node:path')
// const {} = require('../../.data')

const baseUrl = join(__dirname, '../../.data')

const createHandler = (file, dir, data, callback) => {
    open(`${baseUrl}/${file}/${dir}.json`, 'wx', (err, file) => {
        if(!err && file) {
            // convert object ot string
            const stringData = JSON.stringify(data)

            // write a file
            writeFile(file, stringData, (err) => {
                if(!err) {
                    close(file, (err) => {
                        if(!err) {
                            callback(false)
                        } else {
                            // The file is not clogging
                            callback('The file is not clogging')
                        }
                    })
                } else {
                    // file write not posible
                    callback('file write not posible!')
                }
            })
        } else {
            callback('path not found!')
        }
    })
}


module.exports = createHandler;
