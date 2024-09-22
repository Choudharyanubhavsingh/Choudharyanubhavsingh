const express = require('express')
const router=express.Router();
const MenuItems =require('./../modules/menu');
router.post('/', async(req,res) =>{
    try{
        const data=req.body
        const newMenu=new MenuItems(data);
        const responce = await newMenu.save();
        res.status(200).json(responce);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})
router.get('/',async(req,res)=>{
    try{
        const data =await MenuItems.find();
        console.log('data fetched');
        res.status(200).json(data);


    }
    catch(err){

        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})
//  router.get(':/taste',async(res,res)=>{
//     try{

//     }
//     catch(err){

//     }
// })
module.exports=router;