'use strict';
module.exports = (req,res,next)=>{
  res.status(500).json({error:'Bad Request'})
}