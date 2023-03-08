const express = require('express')
const {getadminhome, 
       getadminlogin,
       adminpost,
       Logout,
       gallerypost,
       deleteimage
     } = require('../controllers/adminController')
const router = express.Router()




router.get('/',getadminhome)
router.get('/adminlogin',getadminlogin)
router.post('/adminlogin',adminpost)
router.post('/gallery',gallerypost)
router.get('/delete/:id',deleteimage)
router.get('/logout',Logout)



module.exports = router