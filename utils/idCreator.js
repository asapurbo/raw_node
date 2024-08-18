/*
 * title: id creator
 * author: apurbo howlader
 * date: 8/15/2024
 */

// dependecies

// creator
const idCreator = (len) => {
    const strLength = typeof len === 'number' ? len : 18
    const id = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let mainId = '';

    for (let index = 0; index <= strLength; index++) {
        mainId += id.charAt(Math.floor(Math.random() * id.length));
    }

    return mainId;
};

// module-export
module.exports = idCreator;
