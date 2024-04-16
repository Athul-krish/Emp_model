const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number,

});

const Employee = mongoose.model("employee",schema);
module.exports = Employee;