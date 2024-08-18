/*
 * title: post
 * author: apurbo howlader
 * date: 8/17/2024
 */

// dependecies
const { read, update } = require('../../lib/data');
const { parseJSON } = require('../../utils/parseJson');

// module-scaffolding
const handler = {};

// create post function
handler.put = (_, data, callback) => {
    let { agr: agree, tkn: token } = data ?? {};

    read('token', token, (result) => {
        const tokenData = parseJSON(result)

        if (result && agree) {
            if(tokenData?.expired > Date.now()) {
                const expired  = Date.now() * 60 * 60 * 1000
                const userInfo = {
                    ...{ ...parseJSON(result) },
                    expired
                };
                userInfo.id = { ...parseJSON(result) }.id;

                update('token', token, userInfo, (result) => {
                    if (!result) {
                        read('token', token, (re) => {
                            const result = { ...parseJSON(re) };
                            if (re) {
                                delete result.password;
                                callback(200, { message: result });
                            } else {
                                callback(404, {
                                    message: 'the token file has not been read!',
                                });
                            }
                        });
                    } else {
                        callback(404, { message: 'Authentication date expired!' });
                    }
                });
            } else {
                callback(403, {message: ''})
            }
        } else {
            // user is not able
            callback(404, { message: 'please try again!' });
        }
    });
};

// export module
module.exports = handler;
