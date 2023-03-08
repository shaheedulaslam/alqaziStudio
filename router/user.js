const express = require('express')
const router = express.Router()
const {
    getHome,
    getabout,
    getcontact,
    getService
            }=require('../controllers/userController')


router.get('/',getHome);
router.get('/about',getabout)
router.get('/contact',getcontact);
router.get('/service',getService)




module.exports = router