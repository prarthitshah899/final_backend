var TopProduct=require('../admin models/dashboard_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    TopProduct.TopProductByName(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  module.exports=router;