var express = require('express');
var router = express.Router();
var userModel=require('../Model/user.model')


router.post('/',(req,res)=>{
  let newuser=new userModel({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password
  })
  newuser.save()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })

})
router.post('/',(req,res)=>{
  const {email,password}=req.body
  users.findOne({email:email},(err,user)=>{
    if(user){
      if(password === user.password ) {
          res.send({message: "Login Successfull", user: user})
      } else {
          res.send({ message: "Password didn't match"})
      }
  } else {
      res.send({message: "User not registered"})
  }
  })
})
router.get('/',(req,res)=>{
  userModel.find()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
router.put('/:id',(req,res)=>{
  userModel.findByIdAndUpdate(req.params.id,{
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password

  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
router.delete('/:id',(req,res)=>{
  bookModel.findByIdAndDelete(req.params.id)
  .then(response=>{
    res.send(response)

  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports=router;