import express from "express"
import Cheese from "../models/cheese"

const router = express.Router()

const catcher = (res) => (error) => res.status(400).json({error})

// Index Route
router.get("/", async (req, res) => {
    const cheeses = await Cheese.find({}).catch(catcher(res))
})