const mongoose=require('mongoose');
const mongoURL=('mongodb://localhost:27017/hotel')
mongoose.connect(mongoURL,{
// useNewUrlParser:true,
// useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connection',function(){
    console.log('connected to mongo server');
    
});
module.exports=db;


