const express = require('express');
      router = express.Router();
      Theatre = require('../controllers/Theatre');

router.get('/', Theatre.index);
router.post('/', Theatre.create);
router.patch('/:id', Theatre.update);
router.get('/:id', Theatre.show);
router.delete('/:id', Theatre.destroy);


module.exports = router;