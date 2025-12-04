import Employee from "../models/employees.js"
import { Leave } from "../models/leave.js"


const addLeave = async (req, res) => {
    try {
        const { userID, leaveType, startDate, endDate, reason } = req.body

        const employee = await Employee.findOne({ userID })
        const newLeave = new Leave({
            employeeId: employee._id, leaveType, startDate, endDate, reason
        })

        await newLeave.save()

        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(500).json({ success: false, error: "leave add server error" })
    }
}

const getLeaves = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findOne({ userID: id });

        const leaves = await Leave.find({ employeeId: employee._id });
        return res.status(200).json({ success: true, leaves });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, error: "leave add server error" });
    }
};

const getViewLeaves = async (req, res) => {
    try {
        const leaves = await Leave.find().populate({
            path: "employeeId",
            populate: [
                {
                    path: 'department',
                    select: 'dep_name'
                },
                {
                    path: 'userID',
                    select: 'name'
                }
            ]
        })
        return res.status(200).json({ success: true, leaves })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, error: "leave add server error" })
    }
}

const leaveDetails = async (req, res) => {
    try {
        const { id } = req.params
        const leave = await Leave.findById(id).populate({
            path: "employeeId",
            populate: [
                {
                    path: 'department',
                    select: 'dep_name'
                },
                {
                    path: 'userID',
                    select: 'name'
                }
            ]
        })
        return res.status(200).json({ success: true, leave })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, error: "leave send server error" })
    }
}

const updateLeaveStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const leave = await Leave.findByIdAndUpdate({ _id: id }, { status: req.body.status });
        if(!leave) {
            return res.status(404).json({success: false, error: "leave not founded"})
        }
        return res.status(200).json({success: true})
    } catch(error) {
        console.log(error.message)
        return res.status(500).json({success: false, error: "leave update server error"})
    }
}

export { addLeave, getLeaves, getViewLeaves , leaveDetails , updateLeaveStatus }