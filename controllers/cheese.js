import express from "express"
import Cheese from "../models/cheese"

const router = express.Router()

const catcher = (res) => (error) => res.status(400).json({error})

// Index Route
router.get("/", async (req, res) => {
    const cheeses = await Cheese.find({}).catch(catcher(res))
    res.json(cheeses)
})

// Delete Route
router.delete("/", async (req, res) => {
    const cheese = await Cheese.findByIdAndRemove(req.params.id).catch(catcher(res))
    res.json(cheese)
})

// Update Route
router.put("/", async (req, res) => {
    const cheese = await Cheese.findByIdAndUpdate(req.params.id, req.body).catch(catcher(res))
    res.json(cheese)
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

export default router

