const fs = require('fs');

const writeFile = fileContent => {
    fs.writeFile('dist/index.html', fileContent, err => {
        if (err) {
            console.error(err);
        }
        //index.html successfully written
    })
}