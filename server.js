import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import databaseConnection from "./src/config/dataBase.js";
import userSeed from "./src/userSeed.js"
import { authRouter } from "./src/routes/auth.js";
import depRouter from "./src/routes/deperment.js";
import { employeesRouter } from "./src/routes/employees.js";
import leaveRouter from "./src/routes/leave.js";
import { dashRouter } from "./src/routes/dashBoard.js";

const app = express();
dotenv.config();
app.use(cors({
    origin:"https://hr-ui-nine.vercel.app",
    credentials:true
}))
app.use(express.json());

app.use("/auth", authRouter);
app.use("/department", depRouter);
app.use("/employee", employeesRouter)
app.use("/leave", leaveRouter);
app.use("/dashboard", dashRouter);



databaseConnection().then(async () => {
    console.log("database connection is establish");
    await userSeed()
    app.listen(process.env.PORT, () => {
        console.log("app start");
    });
}).catch(() => {
    console.log("a error occured to connect db");
})
