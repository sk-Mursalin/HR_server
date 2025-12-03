import express from 'express'
import authMiddleware from '../middlewares/authmiddleware.js'
import { addEmployee, getEmployee, getEmployees } from '../controller/employeeController.js'

const employeesRouter = express.Router()

employeesRouter.get('/', authMiddleware, getEmployees)
employeesRouter.post('/add', authMiddleware, addEmployee)
employeesRouter.get('/:id', authMiddleware, getEmployee)
// router.put('/:id', authMiddleware, updateDepartment)
// router.delete('/:id', authMiddleware, deleteDepartment)

export { employeesRouter }