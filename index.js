const express = require('express');
const routes = require('./routes/mainRoutes');
const app = express()

app.use('/',routes)

app.listen(5000,()=>
{
    console.log('server started')
})