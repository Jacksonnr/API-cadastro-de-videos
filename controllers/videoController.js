const videoService = require ('../services/videoService');

async function createVideo (req, res) {
    try {
        const novoVideo = await videoService.createVideo(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Erro ao criar o cadastro do vídeo!"});
    }
}


async function getAllVideos(req, res) {
    try {
        const videos = await videoService.getAllVideos();
        res.json(videos)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar vídeos!'})
    }
}

async function getVideoById (req,res) {

    const videoId = parseInt(req.params.id);

    try {
        const videos = await videoService.getVideoById(videoId);
        if (!videos) {
            res.status(404).json({error: "Vídeo não encontrado!"})
        } else {
            res.json(videos)
        }
        res.json(videos)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao buscar o vídeo informado!'})
    }
}

async function updateVideo (req,res) {

    const videoId = parseInt(req.params.id);

    try {
        const updatedVideo = await videoService.updateVideo(videoId);
        if (!updatedVideo) {
            res.status(404).json({error: "Vídeo não encontrado!"})
        } else {
            res.json(updatedVideo)
        }
        res.json(updatedVideo)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao atualizar o vídeo informado!'})
    }
}


async function deleteVideo (req,res) {

    const videoId = parseInt(req.params.id);

    try {
        const deletedVideo = await videoService.deleteVideo(videoId);
        if (!deletedVideo) {
            res.status(404).json({error: "Vídeo não encontrado!"})
        } else {
            res.json({ menssage: "Vídeo excluído com sucesso!"})
        }
        res.json(deletedVideo)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao excluir o vídeo informado!'})
    }
}



module.exports = {
    createVideo,
    getAllVideos,
    getVideoById,
    updateVideo,
    deleteVideo

};