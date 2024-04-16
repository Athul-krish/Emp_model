// Task1: initiate app and run server at 3000
const { log, error } = require('console');
const express = require('express');
const app = new express();
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));


// Task2: create mongoDB connection 
const mongoose = require('mongoose');
const Employee = require('./Model/employee_model');
mongoose.connect("mongodb+srv://athulkrishnapanamakkal:athulpu@cluster0.oll34kg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 .then(()=>{
     console.log("connected to DB");
     })
 .catch((err)=>{
     console.log(err);
 })



//Task 2 : write api with error handling and appropriate api mentioned in the TODO below
app.use(express.json());
//API
app.post("/api/employeelist",async(req,res)=>{
    try {
        const data = req.body;
        await Employee(data).save();
        res.send(Data)
        
    } catch (error) {
        console.log(error)
    }
});


//TODO: get data from db  using api '/api/employeelist'

app.get("/api/employeelist",async(req,res)=>{
     try {
        const data = await Employee.find()
        res.json(data)
     } catch (err) {
        console.log(error);
     }
})

//TODO: get single data from db  using api '/api/employeelist/:id'

app.get("/api/employeelist/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await Employee.findById(id);
        res.json(data);
    } catch (err) {
        console.log(error);
    }
})

//TODO: send data from db using api '/api/employeelist'

app.post("/api/employeelist",async(req,res)=>{
    try {
        const data = await Employee(data);

    } catch (error) {
        console.log(error);
    }
})

//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete("/api/employeelist/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteduser = await Employee.findByIdAndDelete(id);
        res.send(deleteduser)
    } catch (error) {
        console.log(error);
    }
})




//TODO: Update  a employee data from db by using api '/api/employeelist'

app.put()

//Request body format:{name:'',location:'',position:'',salary:''}
app.put("/api/employeelist",async(req,res)=>{
    try {
        const id = req.params.id;
        const item =req.body;
        await Employee.findByIdAndUpdate(id,item);
        res.send(updateduser);
    } catch (error) {
        console.log(error);
    }
})






app.listen(3000,(req,res)=>{
    console.log("Running in port port 3000");
})
//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



