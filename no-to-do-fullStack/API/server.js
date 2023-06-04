import express from "express"
import taskRouter from "./src/routers/taskRouter.js"

const app = express();
const PORT = 8000;

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
    console.log(`Server running at http://localhost:${PORT}`)
})