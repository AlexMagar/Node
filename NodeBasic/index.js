import express from "express";
import path, { dirname } from "path";
import fs from "fs";
import { error } from "console";

const app = express();
const PORT = 8000;

const __dirname = path.resolve();
const fn = __dirname + "/userList.csv";

//middleware
app.use(express.urlencoded());


// routers
app.get("/register", (req, res) =>{
    // console.log(req.query)

    const {email, password} = req.query;
    const str = `${email}, ${password}\n`;

    //append in file(in our case userList.csv) 
    // fn: absolute file path of destination file -> userList.csv
    // str: what to do append in file
    // error: error message if append on file is fail
    fs.appendFile(fn, str, (error)=>{
        error ? console.log(error.message) : console.log("added to the file")
    })

    // res.send("<h1>You are in the registration</h1>")
    res.sendFile(__dirname + "/src/regForm.html");


})

app.get("/login", (req,res) =>{
    res.sendFile(__dirname + "/src/loginForm.html");
})

app.post("/login", (req, res) =>{
    
    const {email, password} = req.body;
    const str = `${email}, ${password}`;

    //read file
    fs.readFile(fn, (error, data)=>{
        error && console.log(error.message);

        const userStr = data.toString();
        const userArg = userStr.split("\n");

        if(userArg.includes(str)){
            res.send("<h1>Login Sucess</h1>")
        }else{
            res.send("<h1>Invalid</h1>")
        }

        console.log(data.toString());
    })

    // res.send("<h1>You are in the Login</h1>")
    // res.sendFile(__dirname + "/src/loginForm.html");
})


//root router, home Page
app.get("/", (req, res) =>{
    console.log("received request to home router")

    res.send(`<h1>You are in the homePage</h1>

        <a href="/login"> <button>Login</buttom></a>
        <a href="/register"> <button>Register</buttom></a>
    
    `)
})
// make our server available on http request
app.listen(PORT, error =>{
    error ? console.log(error.message) : console.log(`Server running at http://localhost:${PORT}`)
})