const mongoose = require("mongoose")
const LINK_DB = process.env.DB_URL

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true)
        const db = await mongoose.connect(LINK_DB)
        const { host } = db.connection
        return host
    } catch (error) {
        return next(error)
    }
}
module.exports = { connectDB }