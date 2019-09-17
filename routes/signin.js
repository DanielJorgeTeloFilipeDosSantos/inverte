'use strict';

const { Router } = require('express');
const router = Router();

router.get('/sform', (req, res, next) => {
    res.render('signin')
    
  });

module.exports = router;