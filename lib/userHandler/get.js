/*
 * title: post
 * author: apurbo howlader
 * date: 8/17/2024
 */

// dependecies
const { read } = require('../../lib/data');
const { parseJSON } = require('../../utils/parseJson');

// module-scaffolding
const handler = {};

// create post function
handler.get = (query, _, callback) => {
    read('users', query.email, (re) => {
        if (re) {
            let result = { ...parseJSON(re) };
            delete result.password;

            callback(200, { message: result });
        } else {
            callback(404, { message: 'data has not found out' });
        }
    });
};

// export module
module.exports = handler;
