const path = require("path");
const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.use(cors())
app.use(express.json())
app.use('/updateprofile',require('./routes/userroute'));
app.use('/pregistration',require('./routes/userroute'))
app.use('/login',require('./routes/userroute'));
app.use('/plogin',require('./routes/userroute'));
app.use('/query',require('./routes/userroute'));
app.use('/querylist',require('./routes/userroute'))
app.use('/dlist',require('./routes/userroute'));
app.use('/plist',require('./routes/userroute'));
app.use('/singledrlist',require('./routes/userroute'));
app.use('/singleplist',require('./routes/userroute'));
app.use('/singlequery',require('./routes/userroute'))
app.use('/updatequery',require('./routes/userroute'))
app.use('/totalpatient',require('./routes/userroute'))
app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("server has started at port",port)
    }
})