import express from 'express'
import authMiddleware from '../middlewares/authmiddleware.js'
import {addDeperment, deleteDepartment, getDepartment, getDepartments, updateDepartment} from '../controller/departmentController.js'

const depRouter = express.Router()

depRouter.get("/" ,authMiddleware , getDepartments )
depRouter.post("/add", authMiddleware, addDeperment);
depRouter.get("/:id", authMiddleware, getDepartment);
depRouter.put("/:id", authMiddleware, updateDepartment);
depRouter.delete("/:id", authMiddleware, deleteDepartment);




export default depRouter