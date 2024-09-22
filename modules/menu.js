const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['chilly','sour','sweet','spicy'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingrideants:{
        type:[String],
        default:[]
        
    },
    num_sales:{
        type:Number,
        default:0
    }

});
const MenuItems =mongoose.model('MenuItem',menuItemSchema);
module.exports=MenuItems;
