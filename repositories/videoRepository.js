const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//Criação dos vídeos
async function createVideo(videoData) {
    const videoCreated = 
    await prisma.$executeRaw`INSERT INTO Videos (id, titulo, descricao, url)
    VALUES(
        ${videoData.id},
        ${videoData.titulo},
        ${videoData.descricao},
        ${videoData.url}
    );`;

    if (videoCreated){
        return getVideoById(videoData.id);
    }
}


//Busca de todos os vídeos cadastrados no banco de dados.
async function getAllVideos(){
    try {
        const result = await prisma.$queryRaw`SELECT * FROM Videos`;
        return result;
    } catch (error) {
        console.error("Erro ao execultar consulta SQL: ", error)
    } finally {
        await prisma.$disconnect();
    }
}


// Buscar Vídeos pelo ID
async function getVideoById(videoId){
    try {
        const result =  await prisma.$queryRaw`SELECT * FROM Videos WHERE id = ${videoId}`
    } catch (error) {
        console.error("Erro ao execultar consulta SQL: ", error)
    } finally {
        await prisma.$disconnect();
    }
    
}


// Atualizar o vídeo pelo ID
async function updateVideo(videoId, videoData){
    try {
        const videoUpdate = await prisma.$executeRaw`UPDATE Video SET
        id = ${videoData.id},
        titulo = ${videoData.titulo},
        descricao =  ${videoData.descricao},
        url = ${videoData.url}
        WHERE id = ${videoId}
        `;
    } catch (error) {
        console.error("Erro ao execultar consulta SQL: ", error)
    }
}

// Deletar os vídeos pelo ID 
async function deleteVideo(videoId){
    return await prisma.$queryRaw`DELETE FROM Videos WHERE id = ${videoId}`
}


module.exports = {
    createVideo,
    getAllVideos,
    getVideoById,
    updateVideo,
    deleteVideo
}