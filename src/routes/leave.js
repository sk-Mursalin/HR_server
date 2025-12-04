import express from 'express'
import authMiddleware from '../middlewares/authmiddleware.js'
import { addLeave, getLeaves, getViewLeaves, leaveDetails, updateLeaveStatus } from '../controller/leaveController.js'

const leaveRouter = express.Router()

leaveRouter.post('/add', authMiddleware, addLeave)
leaveRouter.get('/:id', authMiddleware, getLeaves)
leaveRouter.put('/:id', authMiddleware, updateLeaveStatus)
leaveRouter.get('/details/:id', authMiddleware, leaveDetails)
leaveRouter.get('/', authMiddleware, getViewLeaves)



export default leaveRouter