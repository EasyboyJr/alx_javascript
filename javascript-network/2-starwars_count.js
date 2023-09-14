const request = require('request');
const url = process.argv[2];
const id = 18;
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    const data = JSON.parse(body);
    const includeWedge = data.results.filter(movie => {
        return movie.characters.some(characterUrl => characterUrl.includes('/' + id + '/'));
    })
    console.log(includeWedge.length);
})