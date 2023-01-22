import express from "express"
import Cheese from "../models/cheese"

const router = express.Router()

const catcher = (res) => (error) => res.status(400).json({error})

// Index Route
router.get("/", async (req, res) => {
    const cheeses = await Cheese.find({}).catch(catcher(res))
    res.json(cheeses)
})

// Create Route
router.post("/", async (req, res) => {
    const cheese = await Cheese.create(req.body).catch(catcher(res))
    res.json(cheese)
})

// Show Route
router.get("/", async (req, res) => {
    const cheese = await Cheese.findById(req.params.id).catch(catcher(res))
    res.json(cheese)
})

