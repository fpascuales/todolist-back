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

//METER UN GETALLUSER PARA PODER SACAR UN SELECT A LA HORA DE ASIGNAR TAREA A UN USUARIO. TAREAS TENDRÁ EL USUARIO CREADOR Y EL ASIGNADO

module.exports = {
    signUp,   
    login
}