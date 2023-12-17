const express=require("express")
const Contact=require("../Models/conntact")
const router=express.Router()

router.get('/test',(req,res)=>{
    res.send('hello')
})


router.post('/add',async(req,res)=>{
    try{
        const {name, email, phone}=req.body
        const newcontact= new Contact ({name,email,phone})
        await newcontact.save();
        res.status(200).send({msg:'contact added',newcontact})
    }catch(error){
        res.status(400).send({msg:'can not add this contact'})
    }
})

router.get('/all',async(req,res)=>{
    try{
        listContacts=await Contact.find();
        res.status(200).send({msg:'contact list',listContacts})
    }catch(error){
        res.status(400).send({msg:'can not get contact list'})
    }
})
// remove contact 
router.delete('/:_id',async(req,res)=>{
    try{
        const {_id}=req.params;
        await Contact.findByIdAndDelete({_id})
        res.status(200).send({msg:'contact deleted'})

    }catch(error){
        res.status(400).send({msg:'can not find this contact'})

    }
})

//update contact
router.put('/:_id',async(req,res)=>{
    try{
   const {_id}=req.params
    const updatedContact=await Contact.findOneAndUpdate({_id},{...req.body})
    res.status(200).send({msg:'contact updated'})
    }catch(error){
        res.status(400).send({msg:'can not update this contact'})
    }

})
    router.get('/:_id',async(req,res)=>{
        try{
            const contactToGet=await Contact.findOne({_id:req.params._id})
            
            res.status(200).send({msg:'contact getted',contactToGet})

        }catch{
            res.status(400).send({msg:'can not find this contact'})
        }
    })



module.exports=router;