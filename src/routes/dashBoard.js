import express from 'express'
import authMiddleware from '../middlewares/authmiddleware.js'
import { getSummary } from '../controller/dashController.js'


const dashRouter = express.Router()

dashRouter.get('/summary', authMiddleware, getSummary )

export {dashRouter}