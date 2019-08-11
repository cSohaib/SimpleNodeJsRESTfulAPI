const router = require('express').Router();
const story = require('./story');

router.get('/', story.getStories)
router.get('/:id', story.getStoryById)
router.post('/', story.createStory)
router.put('/:id', story.updateStory)
router.delete('/:id', story.deleteStory)

module.exports = router;
