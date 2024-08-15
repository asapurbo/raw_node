/*
 * title: routes
 * author: apurbo howlader
 * date: 8/3/2024
 */

// dependecies
const { aboutHandler } = require('./handlers/aboutHandler');
const { userHandler } = require('./handlers/userHander');

// module-scaffolding
const handler = {};

// create routes
handler.routes = {
    about: aboutHandler,
    user: userHandler
};


// export module
module.exports = handler;
