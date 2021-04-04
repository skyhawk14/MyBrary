const express = require('express');
const author = require('../models/author');
const router = express.Router();
const Author = require('../models/author')

//All authors route
router.get('/',(req,res)=>{
    res.render('authors/index');
})

//New Author Route
router.get('/new', (req,res)=>{
    res.render('authors/new', {author: new author() });
})

//Create Author Route
router.post('/', (req,res)=>{
    const author = new Author({
        name: req.body.name
    })
    author.save((err,newAuthor)=>{
        if(err){
            res.render('/authors/new',{
                author: author1,
                errorMessage: 'Error creating author'
            })
        }else{
            //res.redirect(`authors/${newAuthor.id}`)
            res.redirect('authors')
        }
    })
    res.send(req.body.name);
})


module.exports = router;