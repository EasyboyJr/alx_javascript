const request = require('request');
const fs = require('fs')
const url = process.argv[2];
const file = process.argv[3];
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    fs.writeFile(file, body, 'utf-8', (error) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('sucess');
        }
    })
})