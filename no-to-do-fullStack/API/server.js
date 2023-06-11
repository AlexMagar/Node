import express from "express"
import taskRouter from "./src/routers/taskRouter.js"
import { mongoConnect } from "./src/config/mongoDb.js";
import cors from "cors"


const app = express();
const PORT = 8000;
// connect mongoDb

mongoConnect();

//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/v1/task", taskRouter);


//router
app.use("/", (req, res) =>{
    res.json({
        status: "Sucess",
        message: "server running normal"
    })
});

//open port for http request to access the server
app.listen(PORT, (error) =>{
    // error && console.log(error.message);
    // // ``: is template literal
    // console.log(`Server running at http://localhost:${PORT}`)
    error 
    ? console.log(error.message)
    : console.log(`Server running at http://localhost:${PORT}`)
})