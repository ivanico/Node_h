const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn:{type:Number,required:true},
    title:{type:String,required:true},
    author:{type:String,required:true},
    year:{type:String,required:false}
});

const Book = mongoose.model( 'Book' , bookSchema );

module.exports = {
    Book:Book
}