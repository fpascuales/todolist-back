const { generateSign } = require("../../utils/jwt");
const User = require("./users.model");
const bcrypt = require("bcrypt");

const signUp = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser);    
    } catch (error) {
        return next(error);
    }
}
const login = async (req, res, next) => {
    try{
        const userToLog = await User.findOne({user: req.body.user});
        if(!userToLog){
            return res.status(400).json("Usuario no encontrado");
        }
        if(bcrypt.compareSync(req.body.password, userToLog.password)){
            const token = generateSign(userToLog.id, userToLog.user);
            return res.status(200).json({token, userToLog});
        }
        else{
            return res.status(400).json("Error en la contraseña");
        }
    }
    catch (error) {
        return next(error);
    }
}
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(202).json(users);
    } catch (error) {
        return next(error);
    }
}
const getUsersById = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const user = await User.findById(idUser);
        return res.status(202).json(user);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    signUp,   
    login,
    getAllUsers,
    getUsersById
}