const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(kdist/triumvirate'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('dist/triumvirate/index.html'));
})

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})