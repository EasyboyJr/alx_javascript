const request = require('request');
const url = process.argv[2];
const id = 18;
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    const data = JSON.parse(body);
    const includeWedge = data.results.filter(movie => {
<<<<<<< HEAD
        return movie.characters.some(characterUrl => characterUrl.include('/' + id + '/'));
    });
=======
        return movie.characters.some(characterUrl => characterUrl.includes('/' + id + '/'));
    })
>>>>>>> 05421ab316c2e75eb9ae7a897139a619e1ded022
    console.log(includeWedge.length);
})