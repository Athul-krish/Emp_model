const express = require('express');
const router = express.Router();
const employee1 = require('../DB/Model/Employee');

router.use(express.json());

//API
router.post("/add",async(req,res)=>{
    try {
        const data = req.body;
        await employee1(data).save();
        res.send("Data Added")
    } catch (error) {
        console.log(error)
    }
});

router.put("/update",async(req,res)=>{});



router.delete("/del",(req,res)=>{});

module.exports = router;