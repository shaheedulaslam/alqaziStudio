const gallerymodel = require('../models/user')


module.exports = {
    getadminhome:async(req,res)=>{
        try {
        if(req.session.admin){
        await gallerymodel.find().then(result=>{
            res.render("admin/adminpage",{result})
        })
        }else{
            res.redirect('/adminhome/adminlogin')
        }
        } catch (error) {
         console.log(error);
        }
        
       
    },
    getadminlogin:(req,res)=>{
        try {
            if(req.session.admin){
                res.redirect('/adminhome')
            }else{
                let errmessage = req.session.adminlog;
                req.session.adminlog = null
                res.render('admin/adminlogin',{errmessage})
            }
        } catch (error) {
            console.log(error);
        }
        
    },
    adminpost:(req,res)=>{
        try {
        const email = "alsahtech7@gmail.com"
        const pass = "7172@Abcd"
        const reqmail = req.body.email
        const reqpass = req.body. password
        if(email === reqmail && pass === reqpass){
            req.session.admin = true
            res.redirect('/adminhome')
        }else{
            req.session.adminlog = null
            res.redirect('/adminhome/adminlogin')
        }
        } catch (error) {
            console.log(error);
        }
    },
    Logout:(req,res)=>{
        req.session.admin = false
        console.log("logout aayi");
        res.redirect('/adminhome/adminlogin')
    },
    gallerypost:async(req,res)=>{
        try {
            const image = req.file.filename
            const gallery = new gallerymodel({
                image:image
            })
            await gallery.save().then(result=>{
                console.log(result,"image added");
                res.redirect('/adminhome')
            })
        } catch (error) {
            console.log(error);
        }
    },
    deleteimage:async(req,res)=>{
        try {
            const deleteid  = req.params.id
            await gallerymodel.deleteOne({_id:deleteid}).then(result=>{
            console.log(result,"image deleted");
            res.redirect('/adminhome')
            })
        } catch (error) {
            console.log(error);
        }
      
    }
    
}