import express from "express"
import taskRouter from "./src/routers/taskRouter.js"
import { mongoConnect } from "./src/config/mongoDb.js";


const app = express();
const PORT = 8000;
// connect mongoDb

mongoConnect();

//middleware
app.use(express.json());

//api endpoints
app.use("/api/v1/task", taskRouter);


//router
app.get("/", (req, res) =>{
    res.json({
        status: "Sucess",
        message: "server running normal",
    })
})

//listen to port
app.listen(PORT, (error) =>{
    error && console.log(error.message);
    // ``: is template literal
    console.log(`Server running at http://localhost:${PORT}`)
})