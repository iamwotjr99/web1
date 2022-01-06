const express = require('express');

const app = express();
const port = 8000;

app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + "/js"));
app.use(express.static(__dirname + "/css"));

console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})