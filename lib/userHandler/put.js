/*
 * title: post
 * author: apurbo howlader
 * date: 8/17/2024
 */

// dependecies
const idCreator = require('../../utils/idCreator');
const { create, read, update } = require('../../lib/data');
const { parseJSON } = require('../../utils/parseJson');

// module-scaffolding
const handler = {};

// create post function
handler.put = (_, data, callback) => {
    let { fn: firstName, ln: lastName, pw: password, ea: email } = data ?? {};

    read('users', email, (result) => {
        if (result) {
            const userInfo = {
                firstName,
                lastName,
                password,
                email,
            };
            userInfo.id = { ...parseJSON(result) }.id;

            update('users', email, userInfo, (result) => {
                if (!result) {
                    read('users', email, (re) => {
                        const result = { ...parseJSON(re) };
                        if (re) {
                            delete result.password;
                            callback(200, { message: result });
                        } else {
                            callback(404, {
                                message: 'the file has not been read!',
                            });
                        }
                    });
                } else {
                    callback(404, { message: 'The file is not updating!' });
                }
            });
        } else {
            // user is not able
            callback(404, { message: 'user is not able!' });
        }
    });
};

// export module
module.exports = handler;
