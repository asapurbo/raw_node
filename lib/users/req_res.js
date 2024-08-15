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
    const { firstName, lastName, password, email } = body ?? {};
    // password regex
    // let regex =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
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

    const query = typeof queryData === 'object' ? queryData : false;

    return (user) => {
        if (allMethod.indexOf(reqdata.method) > -1) {
            userData({ fn, ln, pw: hash(pw), ea });
            user[allMethod[allMethod.indexOf(reqdata.method)]](query);
        }
    };
};

// exprots module
module.exports = hanlder;
