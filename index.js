const express = require('express');
const app=express();
require('./config')
const detail = require('./details')

app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await detail.find(
        {
            '$or':[
                {"name":{$regex:req.params.key}},//this is with one field
                {"email":{$regex:req.params.key}},
                {"from":{$regex:req.params.key}},
                {"gender":{$regex:req.params.key}}
            ]
        }
    ) 
    res.send(data)

});

app.listen(5000)