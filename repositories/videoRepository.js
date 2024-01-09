const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


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
async function getVideoById(id){
    return await prisma.$queryRaw`SELECT * FROM Videos WHERE id = ${id}`
    
}


// Deletar os vídeos pelo ID 
async function deleteVideo(id){
    return await prisma.$queryRaw`DELETE FROM Videos WHERE id = ${id}`
}


module.exports = {
    getAllVideos,
    getVideoById
}