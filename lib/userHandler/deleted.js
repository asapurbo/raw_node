/*
 * title: post
 * author: apurbo howlader
 * date: 8/17/2024
 */

// dependecies
const { read } = require('../data');

// module-scaffolding
const handler = {};

// create post function
handler.deleted = (query, _, callback) => {
    read('users', query.email, (isData) => {
        if (isData) {
            deleted('users', query.email, (result) => {
                if (result) {
                    callback(200, { message: 'file successfully deleted!' });
                } else {
                    callback(404, { message: 'the file is not deleted!' });
                }
            });
        } else {
            callback(404, { message: 'The user is not valid!' });
        }
    });
};

// export module
module.exports = handler;
