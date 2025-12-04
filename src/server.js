import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import databaseConnection from "./config/dataBase.js";
import userSeed from "./userSeed.js"
import { authRouter } from "./routes/auth.js";
import depRouter from "./routes/deperment.js";
import { employeesRouter } from "./routes/employees.js";
import leaveRouter from "./routes/leave.js";
import { dashRouter } from "./routes/dashBoard.js";

const app = express();
dotenv.config();
app.use(cors())
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
