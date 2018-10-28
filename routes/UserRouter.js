const express = require('express'),
      router = express.Router(),
      verifyToken = require('./serverAuth').verifyToken,
      User = require('../controllers/User');

router.get('/', User.index);
router.post('/', User.create);
router.post('/authenticate', User.authenticate)

router.use(verifyToken);
router.patch('/:_id', User.update);
router.get('/:_id', User.show);
router.delete('/:_id', User.destroy);

module.exports = router;