const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT , () => {
    console.log("Hello The Server is running on Port :- ",PORT);
})

app.all('/',(req,res)=> {
    console.log("Request :- ",req);
    console.log("Response :- ",res);
    res.send('Hello :- I am Ready !!!');
});