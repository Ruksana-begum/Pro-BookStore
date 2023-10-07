const mongoose = require("mongoose");
const bookSchema =new mongoose.Schema({
bookname: String,
description: String,
author: String,
image:String,
price:Number,
});

const bookModel = mongoose.model('books',bookSchema)
module.exports=bookModel