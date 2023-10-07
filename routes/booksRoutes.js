var express = require('express');
var router = express.Router();
const bookModel =require("../Model/books.model");

router.post("/",(req,res)=>{
    let newbook=new bookModel({
        bookname :req.body.bookname,
        description :req.body.description,
        author : req.body.author,
        image : req.body.image,
        price:req.body.price

      })
      newbook.save()
      .then(response=>{
        res.send(response)
      })
      .catch(err=>{
        res.send(err)
      })
    
    })

    router.get('/',(req,res)=>{
        bookModel.find()
        .then(response=>{
          res.send(response)
        })
        .catch(err=>{
          res.send(err)
        })
      })
      router.put('/:id',(req,res)=>{
        bookModel.findByIdAndUpdate(req.params.id,{
            bookname :req.body.bookname,
            description :req.body.description,
            author : req.body.author,
            image : req.body.image,
            price:req.body.price
      
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