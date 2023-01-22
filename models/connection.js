import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config() 

const DATABASE_URL = process.env.DATABASE_URL ?? "mongodb://localhost:27017/default"

mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => console.log(`connected to mongodb ${DATABASE_URL}`))
.on("close", () => console.log(`disconnected to mongodb ${DATABASE_URL}`))
.on("error", (error) => console.log(error))

export default mongoose