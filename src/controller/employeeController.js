import Employee from "../models/employees.js";
import User from "../models/User.js";
import bcrypt from "bcrypt"
const addEmployee = async (req, res) => {
    try {
        const {
            name,
            email,
            employeeId,
            gender,
            department,
            password,
            role
        } = req.body;
        console.log(req.body);
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, error: "user already registered in emp" });
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            role
        })
        console.log("user saved");
        const savedUser = await newUser.save();
        console.log(savedUser);
        const newEmployee = new Employee({
            userID: savedUser._id,
            employeeID: employeeId,
            gender,
            department
        })

        await newEmployee.save()
        return res.status(200).json({ success: true, message: "employee created" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error on adding employee" })
    }
}


const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate("userID").populate("department")
        return res.status(200).json({ success: true, employees })
    } catch (error) {
        return res.status(500).json({ success: false, error: "get employees server error" })
    }
}

const getEmployee = async (req, res) => {
    const {id }= req.params
    console.log(id);
   
    try {
        const employee = await Employee.findById(id).populate("userID").populate("department")
        return res.status(200).json({ success: true, employee })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "get employee server error" })
    }
}

export { addEmployee, getEmployees , getEmployee }