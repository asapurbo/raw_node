/*
 * title: routes
 * author: apurbo howlader
 * date: 8/3/2024
 */

// dependecies
const { aboutHandler } = require('./handlers/aboutHandler');

// module-scaffolding
const handler = {};

// create routes
handler.routes = {
    about: aboutHandler,
};


// export module
module.exports = handler;
