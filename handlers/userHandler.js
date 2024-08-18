/*
 * title: user handlrs
 * author: apurbo howlader
 * date: 8/12/2024
 */

const { req_res } = require('../lib/users/req_res');

// dependecies
const { post } = require('../lib/userHandler/post');
const { get } = require('../lib/userHandler/get');
const { put } = require('../lib/userHandler/put');
const { deleted } = require('../lib/userHandler/deleted');

// module-scaffolding
const hendler = {};

// about handler function
hendler.userHandler = function (reqdata, callback) {
    hendler._user = {};

    req_res(reqdata, () => {
        // post data
        hendler._user.post = post;

        // get data
        hendler._user.get = get;

        // update data
        hendler._user.put = put;

        // deleted data
        hendler._user.delete = deleted;
    })(hendler._user, callback);
};

// exprots module
module.exports = hendler;
