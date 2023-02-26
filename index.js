const express = require('express');
const path = require('path');
const routes = require('./routes/mainRoutes');
const app = express()

app.use('/',routes)
app.use(express.static('frontend'))
app.set('views',path.join(__dirname,'frontend/'))
app.get('/html',(req,res)=>
{
    console.log(app.get('views'))
    res.sendFile(app.get('views')+'index.html')
})
app.listen(5000,()=>
{
    console.log('server started')
})