const express = require('express');
      router = express.Router();
      Theater = require('../controllers/Theater');

router.get('/', Theater.index);
router.post('/', Theater.create);

module.exports = router;