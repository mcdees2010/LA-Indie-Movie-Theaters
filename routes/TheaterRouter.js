const express = require('express');
      router = express.Router();
      Theater = require('../controllers/Theater');

router.get('/', Theater.index);
router.post('/', Theater.create);
router.patch('/:id', Theater.update);
router.get('/:id', Theater.show);
router.delete('/:id', Theater.destroy);


module.exports = router;