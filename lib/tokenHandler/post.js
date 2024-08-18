/*
 * title: post
 * author: apurbo howlader
 * date: 8/17/2024
 */

// dependecies
const idCreator = require('../../utils/idCreator');
const { create, read } = require('../../lib/data');
const { parseJSON } = require('../../utils/parseJson');

// module-scaffolding
const handler = {};

// create post function
handler.post = (_, data, callback) => {
    let { pw: password, ea: email } = data ?? {};

    if ((password, email)) {
        read('users', email, (result1) => {
            if (result1 && parseJSON(result1).password === password) {
                read('token', email, (result2) => {
                    if (!result2) {
                        const expired = Date.now() * 60 * 60 * 1000;
                        const tokenId = idCreator(22);
                        const userObj = { ...parseJSON(result1) };
                        delete userObj.password;

                        const dataObj = {
                            ...userObj,
                            id: tokenId,
                            expired,
                        };

                        create('token', tokenId, dataObj, (result) => {
                            if (!result) {
                                callback(200, {
                                    message:
                                        'token has been successfully created!',
                                });
                            } else {
                                callback(404, {
                                    message: 'Did not create token!',
                                });
                            }
                        });
                    } else {
                        callback(500, { message: 'Token already exist!' });
                    }
                });
            } else {
                callback(404, { message: 'Email is not valid!' });
            }
        });
    }
};

// export module
module.exports = handler;
