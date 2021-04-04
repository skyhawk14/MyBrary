// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }
  
  const express = require('express')
  const app = express()
  const expressLayouts = require('express-ejs-layouts')
  const bodyParser = require('body-parser')

  const indexRouter = require('./routes/index')
  const authorRouter = require('./routes/authors')
  
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views')
  app.set('layout', 'layouts/layout')
  app.use(expressLayouts)
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({limit:'10mb',extended:false}))

  const mongoose = require('mongoose')
  mongoose.connect('mongodb+srv://admin:k8hWZKnnFuW7zDJ@cluster0.pf0nn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})
  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose'))
  
  app.use('/', indexRouter)
  app.use('/authors', authorRouter)
  
  app.listen(process.env.PORT || 3000)