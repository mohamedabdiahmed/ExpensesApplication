const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

const getAllUsers = async(req,res,next)=>{
    const {userName,email,password} = req.body;
    const users = await prisma.User.findMany({
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

const getbyId =async(req,res,next)=>{
    const {getbyId} = req.params;
    const users = await prisma.User.findUnique({
        where:{userId:+getbyId}
    });
    try {
        res.status(200).json({
            message: `user ${getbyId}`
        })
    } catch (error) {
        res.status(404).json({
            message: `ma jiro wax user ah`
        });
    };
};

module.exports = {
    getAllUsers,
    getbyId
}