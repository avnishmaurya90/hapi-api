const fs = require('fs');
const path = require('path');

const init = () => {
    const files = fs.readdirSync('validators/');
    files.forEach((file) => {
        let fileName = path.basename(file, '.js')
        if (fileName === 'index') {
            return
        }
        module.exports[fileName] = require(`./${file}`);
    })
}

init();