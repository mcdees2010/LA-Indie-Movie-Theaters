const express = require('express');
      router = express.Router();
      Favorite = require('../controllers/Favorite');

router.get('/', Favorite.index);
router.post('/', Favorite.create);
router.patch('/:id', Favorite.update);
router.get('/:id', Favorite.show);
router.delete('/:id', Favorite.destroy);


module.exports = router;