const router = require('express').Router();
const users = require('./users');
const stories = require('./stories');

router.get('/', (req,res) => {
	res.json({ message: 'hooray! welcome to our api!' });
});

router.use('/users', users);
router.use('/stories', stories);

module.exports = router;