var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route just to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    logger.log('Hey from post!!');
    res.send({ok: "Message from posts"});
  });

module.exports = router;