var express=require('express');
var router=express.Router();

router.get("/",function(req,res,next){
    res.render('register',{title : '注册' });
});

module.exports=router;
