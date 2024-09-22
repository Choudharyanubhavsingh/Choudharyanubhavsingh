const express = require('express')
const router=express.Router();
const person =require('./../modules/person');
router.get('/',async(req,res)=>{
    try{
        const data =await person.find();
        console.log('data fetched');
        res.status(200).json(data);


    }
    catch(err){

        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})
router.post('/', async(req,res) =>{
    try{
        const data=req.body
        const newPerson=new person(data);
        const responce = await newPerson.save();
        res.status(200).json(responce);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})
router.get('/:worktype',async(req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef'||worktype=='manager'||worktype=='waiter'||worktype=='owner'){
            const responce =await person.find({work:worktype}) ;
            console.log('responce fetched');
            res.status(200).json(responce);
        }
        else{
            res.status(400).json({error:'Internal work type'});
        }
    }
    catch(err){
         console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
    
})
router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;// extract the id from url parameter
        const UpdatedPersonsData=req.body;//updated data for tha person
        const responce=await person.findByIdAndUpdate(personId,UpdatedPersonsData,{
             new: true,//return the updated documents
             runvalidatuion :true,//run mongoose validdation

          })
          if(!responce){
            return res.status(404).json({error:'person not found'});
          }
          console.log('data updated');
              res.status(200).json(responce);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const responce=await person.findByIdAndDelete(personId);
        if(!responce){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data deleted succesfully');
        res.status(200).json({message:'data deleted '});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
module.exports=router;