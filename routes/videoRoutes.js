const express = require('express');
const videoRouter = express.Router();
const videoController = require('../controllers/videoController');


videoRouter.get('/', videoController.getAllVideos);
videoRouter.get('/videos/?', videoController.getVideoById);


module.exports = videoRouter;