const express = require('express'),
      router = express.Router(),
      verifyToken = require('./serverAuth').verifyToken,
      User = require('../controllers/User');

router.get('/', User.index);
router.post('/', User.create);
router.post('/authenticate', User.authenticate)

router.use(verifyToken);
router.patch('/:id', User.update);
router.get('/:id', User.show);
router.delete('/:id', User.destroy);

module.exports = router;