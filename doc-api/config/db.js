const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'doctors'
})
db.connect((error)=>{
    if(error){
        console.log(error.message)
    }else{
        console.log("database connected")
    }
})
module.exports = db;