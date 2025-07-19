const express = require("express")
require('dotenv').config();
const app = express()
const router = require('./routers/router');
const PORT = process.env.PORT;

app.use(router);

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} `)
})