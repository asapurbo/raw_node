/*
 * title: env handlrs
 * author: apurbo howlader
 * date: 8/11/2024
 */

// dependecies

// module-scaffolding
const hanlder = {};

// about handler function
hanlder.envt = {
    staging: {
        port: 3000,
        key: 'adjflkadjfoiewadkfjj',
    },
    production: {
        port: 5000,
        key: 'ieokaljfidfakjdfaslkd',
    },
};

// run on port
hanlder.currentEnv =
    typeof process.env.NODE_ENV === 'string' &&
    hanlder.envt[process.env.NODE_ENV]
        ? hanlder.envt[process.env.NODE_ENV]
        : hanlder.envt['staging'];

// exprots module
module.exports = hanlder;
