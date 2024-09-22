const express = require('express')
const app = express()
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const person=require('./modules/person');
const MenuItems = require('./modules/menu');


app.get('/', function (req, res) {
  res.send('Welcome to JAAT RESTURANT')
})



const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
const menuRoutes=require('./routes/menuItemsRoutes');
app.use('/menu',menuRoutes);
app.listen(3000,()=>{
    console.log('listening on port 3000');
})