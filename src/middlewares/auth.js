const User = require("../api/users/users.model");
const { verifyJwt } = require("../utils/jwt");

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.json("No estás autorizado");
        }
        const parsedToken = token.replace("Bearer ", "");
        const validToken = verifyJwt(parsedToken);
        const userLoged = await User.findById(validToken.id);
        userLoged.password = null;
        req.user = userLoged;
        next();
    } catch (error) {
        return next(error);
    }
}
module.exports = isAuth;