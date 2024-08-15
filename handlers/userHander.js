/*
 * title: user handlrs
 * author: apurbo howlader
 * date: 8/12/2024
 */

const { req_res } = require('../lib/users/req_res');

// dependecies
const { create, read, update, deleted } = require('../lib/data');
const idCreator = require('../utils/idCreator');
const {parseJSON} = require('../utils/parseJson')

// module-scaffolding
const hendler = {};

// about handler function
hendler.userHandler = (reqdata, callback) => {
    let _user = {};
    req_res(reqdata, (data) => {
        let {
            fn: firstName,
            ln: lastName,
            pw: password,
            ea: email,
        } = data ?? {};

        // post data
        _user.post = () => {
            if ((firstName, lastName, password, email)) {
                read('users', email, (result) => {
                    if (!result) {
                        const userInfo = {
                            firstName,
                            lastName,
                            password,
                            email,
                        };
                        userInfo.id = idCreator();

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

        // get data
        _user.get = (query) => {
            read('users', query.email, (re) => {
                if (re) {
                    let result =  {...parseJSON(re)}
                    delete result.password

                    callback(200, {message: result});
                } else {
                    callback(404, {message: "data has not found out"})
                }
            });
        };

        // update data
        _user.put = () => {
            read('users', email, (result) => {

                if(result) {
                    const userInfo = {
                        firstName,
                        lastName,
                        password,
                        email,
                    };
                    userInfo.id = {...parseJSON(result)}.id;

                    update('users', email, userInfo, (result) => {
                        if(!result) {
                            read('users', email, (re) => {
                                const result = {...parseJSON(re)}
                                if(re) {
                                    delete result.password
                                    callback(200, {message: result});
                                } else {
                                    callback(404, {message: 'the file has not been read!'})
                                }
                            })
                        } else {
                            callback(404, {message: 'The file is not updating!'})
                        }
                    })
                } else {
                    //
                }
            })
        }

        // deleted data
        _user.delete = (query) => {

            read('users', query.email, (isData) => {
                if(isData) {
                    deleted('users', query.email, (result) => {
                        if(result) {
                            callback(200, {message: "file successfully deleted!"})
                        } else {
                            callback(404, {message: 'the file is not deleted!'})
                        }
                    })
                } else {
                    callback(404, {message: "The user is not valid!"})
                }
            })
        }

    })(_user);
};

// exprots module
module.exports = hendler;
