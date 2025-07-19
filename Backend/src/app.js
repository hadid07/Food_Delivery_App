const express = require("express")
const app = express()
const router = require('./routers/router');
require('dotenv').config();
require('./db/dbcon')
const PORT = process.env.PORT;



var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} `)
})