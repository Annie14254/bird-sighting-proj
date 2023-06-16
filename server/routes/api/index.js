const router = require('express').Router();
const userRoutes = require('./user-routes');
const sightingRoutes = require('./sighting-routes');


router.use('/user', userRoutes);
router.use('/sighting', sightingRoutes);


module.exports = router;
