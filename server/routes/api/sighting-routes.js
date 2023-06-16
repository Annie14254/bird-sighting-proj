const router = require('express').Router();

// Import any sighting controllers needed here
// appended as "post"
const { createPost, getAllPost, getOnePost, updatePost, deletePost } = require('../../controllers/sighting-controllers');


router.route('/create-user').post(createPost);
router.route('/').get(getAllPost)
router.route('/:id').get(getOnePost);
router.route('/:id').put(updatePost)
router.route('/:id').delete(deletePost)

module.exports = router;    