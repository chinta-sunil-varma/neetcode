const express = require('express');
const router=express.Router()

router.get('/',(req,res)=>
{
    res.send('this is a get')
})
router.get('/:name',(req,res)=>
{
    res.send(`your name is ${req.params.name}`)
})
module.exports=router