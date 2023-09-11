const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + id;
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    const jsonData = body;
    const parsedData = JSON.parse(jsonData);
    console.log(parsedData.title);
})