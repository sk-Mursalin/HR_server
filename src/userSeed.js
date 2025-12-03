import User from './models/User.js'
import bcrypt from 'bcrypt'

const userRegister = async () => {
    try {
        const isAdminExist = await User.findOne({ email: "admin@gmail.com" });
        if (isAdminExist) return console.log("Admin already exists");

        const hashedPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin"
        })

        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

export default userRegister ;