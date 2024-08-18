/*
 * title: users handlrs
 * author: apurbo howlader
 * date: 8/12/2024
 */

// dependecies
const { hash } = require('../../utils/hash');

// module-scaffolding
const hanlder = {};

// about handler function
hanlder.req_res = (reqdata, userData) => {
    const allMethod = ['get', 'post', 'put', 'delete'];
    const { body, queryData } = reqdata ?? {};
    const { firstName, lastName, password, email, agree, token } = body ?? {};

    // password regex
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    // email regex
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const fn =
        typeof firstName === 'string' && firstName.trim().length > 0
            ? firstName
            : false;

    const ln =
        typeof lastName === 'string' && lastName.trim().length > 0
            ? lastName
            : false;

    const pw =
        typeof password === 'string' &&
        password.trim().length > 0 &&
        password.match(regularExpression)
            ? password
            : false;

    const ea =
        typeof email === 'string' && email.trim().length > 0 && email.match(re)
            ? email
            : false;
    const agr = typeof agree === 'boolean' ? agree : false;

    const query = typeof queryData === 'object' ? queryData : false;

    const tkn = typeof token === 'string' && token.length === 23 ? token : false;

    return (user, callback) => {
        if (allMethod.indexOf(reqdata.method) > -1) {
            userData();
            user[allMethod[allMethod.indexOf(reqdata.method)]](
                query,
                {
                    fn,
                    ln,
                    pw: hash(pw),
                    ea,
                    agr,
                    tkn
                },
                callback
            );
        }
    };
};

// exprots module
module.exports = hanlder;
