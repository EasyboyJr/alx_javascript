const request = require('request');
const url = process.argv[2];
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    const tasks = JSON.parse(body);
    const completed = tasks.filter(task => task.completed);
    let counts = {};
    completed.forEach(task => {
        const id = task.userId;
        if (!counts[id]) {
            counts[id] = 1;
        } else {
            counts[id]++;
        }
    });
        console.log(counts);

})