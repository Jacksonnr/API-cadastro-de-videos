const videoRepository = require('../repositories/videoRepository');

async function createVideo(videoData){
    return await videoRepository.createVideo(videoData);
}

async function getAllVideos(){
    return await videoRepository.getAllVideos();
}

async function getVideoById (videoId) {
    return await videoRepository.getVideoById(videoId);
}

async function updateVideo (videoId, videoData) {
    return await videoRepository.updateVideo(videoId, videoData);
}

async function deleteVideo (videoId) {
    return await videoRepository.deleteVideo(videoId);
}


module.exports = {
    createVideo,
    getAllVideos,
    getVideoById,
    updateVideo,
    deleteVideo
}