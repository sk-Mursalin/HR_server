import express from 'express'
import authMiddleware from '../middlewares/authmiddleware.js'
import { addLeave, getLeaves } from '../controller/leaveController.js'

const leaveRouter = express.Router()

leaveRouter.post('/add', authMiddleware, addLeave)
leaveRouter.get('/:id', authMiddleware, getLeaves)


export default leaveRouter