const express = require('express');
const db = require('../config/db');
const multer = require('multer');
exports.updateprofile=(request,response)=>{
    const registrationData = {'images':request.file.path}
    console.log(registrationData)
    const id = {id: request.params.id}
    // querydata = request.body;
    db.query("update dlist set ? where ?",[registrationData,id],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":',',"message":result}))
        }
    })
}
exports.pregistration=(request,response)=>{
    const date = new Date();
    const registrationdata = {'docid':request.body.docid, 'doctorname':request.body.doctorname, 'date':date, 'name':request.body.name, 'gender':request.body.gender, 'age':request.body.age, 'mobile':request.body.mobile, 'disease':request.body.disease, 'status':request.body.status, 'otp':'1234'}
    db.query("insert into plist set ?",registrationdata,(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":",","message":result}))
        }
    })
}
const storage = multer.diskStorage({
    destination:function(request,file,cb){
        cb(null,'./public')
    },
    filename:function(request,file,cb){
        cb(null,file.originalname)
    }
})
exports.uploadimg = multer({storage: storage}).single('images');
exports.storedata=(request,response)=>{
    const querydata = {'date':request.body.date, 'name':request.body.name, 'gender':request.body.gender, 'mobile':request.body.mobile, 'email':request.body.email, 'query':request.body.query}
    db.query("insert into query set ?",querydata,(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400, "error":error}))
        }else{
            response.send(JSON.stringify({"status":200, "error":",", "message":result}))
        }
    })
}
exports.querylist=(request,response)=>{
    db.query("select * from query",[],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400, "error":error}))
        }else{
            response.send(JSON.stringify({"status":200, "error":",", "message":result}))
        }
    })
}
exports.login=(request,response)=>{
    const {email,password} = request.body;
    db.query("select * from dlist where email = ? and password = ?",[email,password],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else if(result != ""){
            response.send(JSON.stringify({"status":200,"error":",","message":result}))
        }else{
            response.send(JSON.stringify({"status":200,"error":",","message":"email or password is incorrect"}))
            console.log(result)
        }
    })
}
exports.plogin=(request,response)=>{
    const {mobile, otp} = request.body;
    db.query("select * from plist where mobile = ? and otp = ?",[mobile, otp],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400, "error":error}))
        }else if(result != ''){
            response.send(JSON.stringify({"status":200, "error":",", "message":result}))
        }else{
            response.send(JSON.stringify({"status":202,"error":",","message":"mobile or otp is incorrect"}))
        }
    })
}
exports.doclist=(request,response)=>{
    db.query("select * from dlist",[],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":",","message":result}))
        }
    })
}
exports.plist=(request,response)=>{
    const docid = request.params
    db.query("select * from plist where ?",[docid],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":",","message":result}))
        }
    })
}
exports.singledrlist=(request,response)=>{
    const id = {id: request.params.id}
    db.query("select * from dlist where ?",[id],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":",","message":result}))
        }
    })
}
exports.singlequery=(request,response)=>{
    const id = {id: request.params.id}
    db.query("select * from query where ?",[id],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":",","message":result}))
        } 
    })
}
exports.singleplist=(request,response)=>{
    const mobile = {mobile: request.params.mobile}
    db.query("select * from plist where ?",[mobile],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":",","message":result}))
        }
    })
}
exports.updatequery=(request,response)=>{
    const id = {id: request.params.id}
    querydata = request.body;
    db.query("update query set ? where ?",[querydata,id],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400,"error":error}))
        }else{
            response.send(JSON.stringify({"status":200,"error":',',"message":result}))
        }
    })
}
exports.totalpatient=(request,response)=>{
    const docid = request.params;
    db.query("select count(docid) from plist where ?",[docid],(error,result)=>{
        if(error){
            response.send(JSON.stringify({"status":400, "error":error}))
        }else{
            response.send(JSON.stringify({"status":200, "error":'', "message":result}))
        }
    })
}