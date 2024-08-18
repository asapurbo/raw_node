/*
 * title: deleted token
 * author: apurbo howlader
 * date: 8/17/2024
 */

// dependecies
const { read, deleted } = require('../data');

// module-scaffolding
const handler = {};

// create post function
handler.deleted = (query, _, callback) => {
    read('token', query.token, (isData) => {
        if (isData) {
            deleted('token', query.token, (result) => {
                if (result) {
                    callback(200, { message: 'token successfully deleted!' });
                } else {
                    callback(404, { message: 'the token file is not deleted!' });
                }
            });
        } else {
            callback(404, { message: 'The token is not valid!' });
        }
    });
};

// export module
module.exports = handler;
