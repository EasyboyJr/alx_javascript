const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    const data = JSON.parse(body);
    const allcharacters = data.characters;
    for (const char of allcharacters) {
        request.get(char, (error, response, charbody) => {
            if (error) {
                console.error('Error:', error);
            } else {
                const chardata = JSON.parse(charbody);
                console.log(chardata.name);
            }
        })
    }
});