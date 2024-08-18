/*
 * title: routes
 * author: apurbo howlader
 * date: 8/3/2024
 */

// dependecies
const { aboutHandler } = require('./handlers/aboutHandler');
const { userHandler } = require('./handlers/userHandler');
const { tokenHandler } = require('./handlers/tokenHendler')

// module-scaffolding
const handler = {};

// create routes
handler.routes = {
    about: aboutHandler,
    user: userHandler,
    token: tokenHandler
};


// export module
module.exports = handler;
