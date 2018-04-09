const fs = require('fs')

function saveHandle(userhandle, site) {
    let handle = `${site}%2F${userhandle}`
    //Replace the file with a new one:
    fs.writeFile('info.txt', handle, function (err) {
    if (err) throw err;
    });
}


module.exports = { saveHandle }