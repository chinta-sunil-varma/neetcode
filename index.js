const express = require('express');
const path = require('path');
// const db = require('./database/db');
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.set('strictQuery',false)
const courseLib = require('./database/lib/courseLib');
// const routes = require('./routes/mainRoutes');
const app = express()

// app.use('/',routes)
app.use(express.static('frontend'))
app.set('viewsi',path.join(__dirname,'frontend/'))
app.get('/html',(req,res)=>
{
    console.log(app.get('viewsi'))
    
    res.sendFile(app.get('viewsi')+'index.html')
})
mongoose.connect(process.env.MONGO_CONNECTION_STRING,async (err)=>
{
    if(err)
    {
        console.log('falied to connect to db');
    }
    else
    {

        console.log('database connected')

        await courseLib.insertFirstCourse();
        console.log('inserted')

        app.listen(5000,()=>
        {
            console.log('server started')
        })
    }
})

