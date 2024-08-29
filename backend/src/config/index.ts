import dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT,
    db: process.env.DB,
    salt: process.env.SALT,
    jwt_secret: process.env.JWT_SECRET
}