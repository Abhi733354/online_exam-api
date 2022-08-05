const express = require('express');
const app = express();
const cors = require('cors');
const usersRoute = require('./routes/users');
// require("dotenv").config({ path: ".env" });


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    try {
        console.log('ExamHub API is running.........');
        res.send('<h1>ExamHub API is running.........</h1>');
    }
    catch{

    }
})

app.use('/users', usersRoute);

// app.listen(process.env.APP_PORT);
app.listen(4000);
