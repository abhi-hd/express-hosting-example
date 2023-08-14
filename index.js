const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('New connection');
    res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})