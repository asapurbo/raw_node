/*
 * title: parse json
 * author: apurbo howlader
 * date: 8/12/2024
 */

// dependecies

// module-scaffolding
const hanlder = {};

// about handler function
hanlder.parseJSON = (str) => {
    let output;

    try {
        output = JSON.parse(str)
    } catch (error) {
        output = {}
    }

    return output;
};

// exprots module
module.exports = hanlder;
