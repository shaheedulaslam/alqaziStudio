const gallerymodel = require('../models/user')

module.exports={
getHome:('/',async(req,res)=>{
await gallerymodel.find().then(result=>{
    res.render('user/index',{result})
})
   
}),
getabout:('/about',(req,res)=>{
    res.render('user/aboutus')
}),
getcontact:('/contact',(req,res)=>{
    res.render('user/contactus')
}),
getService:('/service',(req,res)=>{
    res.render('user/services')
})
}