const request = require('request');
const apiUrl = process.argv[2]; // This should be the URL you pass as a command-line argument

// Ensure that apiUrl is provided
if (!apiUrl) {
    console.error('Please provide the Star Wars API URL as a command-line argument.');
    process.exit(1); // Exit with an error code
}

// Character ID for "Wedge Antilles"
const targetCharacterId = 18;

// Make a request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1); // Exit with an error code
    }

    const jsonData = JSON.parse(body);

    // Filter movies where Wedge Antilles is present
    const moviesWithWedge = jsonData.results.filter(movie => {
        return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${targetCharacterId}/`);
    });

    // Print the count of movies
    console.log(moviesWithWedge.length);
});