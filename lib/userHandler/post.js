/*
 * title: post
 * author: apurbo howlader
 * date: 8/17/2024
 */

// dependecies
const idCreator = require('../../utils/idCreator');
const { create, read} = require('../../lib/data');

// module-scaffolding
const handler = {};

// create post function
handler.post = (_, data, callback) => {
    let {
        fn: firstName,
        ln: lastName,
        pw: password,
        ea: email,
    } = data ?? {};

    if ((firstName, lastName, password, email)) {
        read('users', email, (result) => {
            if (!result) {
                const userInfo = {
                    firstName,
                    lastName,
                    password,
                    email,
                };
                userInfo.id = idCreator(18);

                create('users', email, userInfo, (result) => {
                    if (!result) {
                        callback(200, { message: 'user had create!' });
                    } else {
                        callback(404, {
                            message: 'user was not created!',
                        });
                    }
                });
            } else {
                callback(404, { message: 'Email alrady exist!' });
            }
        });
    }
};

// export module
module.exports = handler;
