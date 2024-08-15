/*
 * title: id creator
 * author: apurbo howlader
 * date: 8/15/2024
 */

// dependecies

// creator
const idCreator = () => {
    const id = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let mainId = '';

    for (let index = 0; index <= 18; index++) {
        mainId += id.charAt(Math.floor(Math.random() * id.length));
    }

    return mainId;
};

// module-export
module.exports = idCreator;
