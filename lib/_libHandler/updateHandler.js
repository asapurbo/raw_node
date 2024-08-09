/*
* title: update handler
* author: apurbo howlader
* date: 8/9/2024
*/

// dependncies
const {readFile, open, writeFile, ftruncate, close } = require('node:fs')
const {join} = require('node:path')
// const {} = require('../../.data')

const baseUrl = join(__dirname, '../../.data')

const updateHandler = (file, dir, data, callback) => {

    // updated file
    open(`${baseUrl}/${file}/${dir}.json`, 'r+', (err, file) => {

        if(!err) {
            // the place is vacated
            ftruncate(file, (err) => {
                if(!err) {
                    // convert object to string
                    const stringData = JSON.stringify(data)

                    // write a file
                    writeFile(file, stringData, (err) => {
                        if(!err) {
                            close(file, (err) => {
                                if(!err) {
                                    // file close
                                    callback('file close')
                                } else {
                                    // there was an error in the closed file
                                    callback('file is not closing!')
                                }
                            })
                        } else {
                            //cannot write to file
                            callback('cannot write to file!')
                        }
                    })
                } else {
                    //the file is not deleting
                    callback('the file is not deleting')
                }
            })
        } else {
            // file is not opening
            callback('file is not opening')
        }
    })
}


module.exports = updateHandler;
