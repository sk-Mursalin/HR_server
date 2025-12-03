import express from 'express'
import authMiddleware from '../middlewares/authmiddleware.js'
import { addEmployee, getEmployee, getEmployees, updateEmployee } from '../controller/employeeController.js'

const employeesRouter = express.Router()

employeesRouter.get('/', authMiddleware, getEmployees)
employeesRouter.post('/add', authMiddleware, addEmployee)
employeesRouter.get('/:id', authMiddleware, getEmployee)
employeesRouter.put('/:id', authMiddleware, updateEmployee)
// router.delete('/:id', authMiddleware, deleteDepartment)

export { employeesRouter }