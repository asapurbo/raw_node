/*
 * title: token handlrs
 * author: apurbo howlader
 * date: 8/12/2024
 */

const { req_res } = require('../lib/users/req_res');

// dependecies
const { post } = require('../lib/tokenHandler/post');
const { get } = require('../lib/tokenHandler/get');
const { put } = require('../lib/tokenHandler/put');
const { deleted } = require('../lib/tokenHandler/deleted');

// module-scaffolding
const hendler = {};

// about handler function
hendler.tokenHandler = function (reqdata, callback) {
    // create scafolding
    hendler._token = {}

    // req res function
    req_res(reqdata, () => {
        // post token
        hendler._token.post = post

        // // get token
        hendler._token.get = get

        // // put token
        hendler._token.put = put

        // // delete token
        hendler._token.delete = deleted
    })(hendler._token, callback)
};

// exprots module
module.exports = hendler;
