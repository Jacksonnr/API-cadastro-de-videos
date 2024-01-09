const videoRepository = require('../repositories/videoRepository');

async function createVideo(){
    return await videoRepository.createVideo();
}

async function getAllVideos(){
    return await videoRepository.getAllVideos();
}

async function getVideoById () {
    return await videoRepository.getVideoById();
}




module.exports = {
    getAllVideos,
    getVideoById
}