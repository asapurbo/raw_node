/*
 * title: parse json
 * author: apurbo howlader
 * date: 8/13/2024
 */

// dependecies
const crypto = require('crypto');
const { currentEnv } = require('../handlers/envt');

// module-scaffolding
const hanlder = {};

// about handler function
hanlder.hash = (str) => {
    // chech password
    pw = typeof str === 'string' && str.trim().length > 0 ? str : false;


    if (pw) {
        // Calling createHmac method
        const hash = crypto
            .createHmac('sha256', currentEnv.key)

            // updating data
            .update(pw)

            // Encoding to be used
            .digest('hex');

        return hash;
    } else {
        console.log('password is not valid!');

    }

    // Displays output
};

// exprots module
module.exports = hanlder;
