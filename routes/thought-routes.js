const router = require('express').Router();
const { addThought, removeThought } = require('../controllers/thought-controller');

// /api/comments/userid
router.route('/:userId').post(addThought);

// /api/comments/<UserId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);


module.exports = router;