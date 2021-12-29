const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://iamwotjr:asd1234@boilerplate.3yh00.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...')).catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send("github is so hard!!");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})