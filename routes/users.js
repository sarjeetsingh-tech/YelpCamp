const express=require('express');
const router=express.Router();
const User=require('../models/user');
const catchAsync = require('../utils/catchAsyncs');
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
const users=require('../controllers/users');
const review = require('../models/review');


router.route('/register').get(users.renderRegisterForm)
                         .post(catchAsync(users.register));
router.route('/login').get(users.renderLogin)
                     .post(storeReturnTo,passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout',users.logout)
module.exports=router;