const express = require('express');
const { post } = require('.');
const router = express.Router();

/* GET users listing. */
router.post('login', function(req, res) {

  const user = User.findOne({
    where: { email: req.body.email}
  });
  if (user) {
    
  } else {
    res.send('Account not found! Please create a new Account')    
  }

});

module.exports = router;
