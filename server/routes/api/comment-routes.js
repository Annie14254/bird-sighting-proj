const router = require('express').Router();

// Import any comment controllers needed here
const { createComment, getAllComment, getOneComment, updateComment, deleteComment } = require('../../controllers/comment-controllers');


router.route('/create-user').post(createComment);
router.route('/').get(getAllComment)
router.route('/:id').get(getOneComment);
router.route('/:id').put(updateComment)
router.route('/:id').delete(deleteComment)

module.exports = router;    