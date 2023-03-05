const {prismaClient } = require('@prisma/client');
const prisma = new  prismaClient();

const getAllUsers = async(req,res,next)=>{
    const {userName,email,password} = req.body;
    const users = await prisma.Users.findMany({
        where:{
            userName,
            email,
            password
        }
    });
    try {
        res.status(202).json({
            users
        })
    } catch (error) {
        res.status(404).json({
            message: `Xog kuma jirto`
        })
    }
}

module.exports = {
    getAllUsers
}