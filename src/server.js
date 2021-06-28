


'use strict';
const express = require('express');
const notFoundHandler = require('../error-handlers/404');
const errorHandler = require('../error-handlers/500');
const logger = require('./middlewares/logger')
const validator = require('./middlewares/validator')
const app = express();

app.use(express.json())
app.use(logger)



app.get('/person',validator,(req,res)=>{
    console.log(req.query.name);
    const name =req.query.name;
    res.status(200).json({ name: name });
  })

  app.get('/bad',(req,res)=>{
    throw new Error('Error');
  })
  app.get('/',(req,res)=>{
    res.json({name:'test'})
  })


  app.use('*',notFoundHandler);
app.use(errorHandler)

module.exports = {
    server:app,
    start:(port)=>{
      app.listen(port,()=>console.log(`Listening on ${port}`))
    }
  }