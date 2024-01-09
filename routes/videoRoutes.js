const express = require('express');
const videoRouter = express.Router();
const videoController = require('../controllers/videoController');


videoRouter.get('/', videoController.getAllVideos);
videoRouter.get('/:id', videoController.getVideoById);
videoRouter.post('/', videoController.createVideo);
videoRouter.put('/:id', videoController.updateVideo);
videoRouter.delete('/:id', videoController.deleteVideo);


module.exports = videoRouter;