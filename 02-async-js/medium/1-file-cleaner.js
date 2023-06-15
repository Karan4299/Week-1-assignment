const fs = require('fs')

function removeExtraSpaces() {
    fs.readFile('text.txt', 'utf-8', (err, data) => {
        console.log(data)
        const fileText = data;
        let removedExtraSpaceString = fileText.split(' ').filter((element) => element !== '').join(" ");
        console.log(removedExtraSpaceString);
    })
}

removeExtraSpaces()