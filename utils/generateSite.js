const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    fs.writeFile('dist/index.html', fileContent, err => {
        if (err) {
            console.error(err);
        }
        resolve({
            ok: true, 
            message: 'Employee Card Complete!'
        })
    })
}