import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

// Create Express App
const app = express()

// Middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


// Routes & Routers
app.get("/", (req, res) => {
    res.json({message: "it works"})
})

// Listener
const PORT = process.env.PORT ?? 4444
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})