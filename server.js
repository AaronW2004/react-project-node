const express = require("express");
const app = express();
const port = 3000;

const schedule = require('./gameschedule.json');

app.use(express.static('public'));

app.get('/api/gameschedule', (req, res) => {
    res.json(schedule);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});