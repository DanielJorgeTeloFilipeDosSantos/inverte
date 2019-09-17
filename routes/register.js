'use strict';

const { Router } = require('express');
const router = Router();
const User = require('./../models/user');

router.get('/rform', (req, res, next) => {
    res.render('register')
    
  });


  router.post('/register/signup', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.signUp(email, password)
    .then(user => {
    console.log('Signed up user', user);
    res.redirect('/');
    })
    .catch(error => {
    console.log('Error during sign-up process', error);
    });
    });

module.exports = router;