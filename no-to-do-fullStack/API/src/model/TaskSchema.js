import mongoose from "mongoose"
// Schema creates the table
const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    }, 
    hr:{
        type: Number,
        required: true
    }, 
    type:{
        type: String,
        required: true,
        default: "entry"
    }
})

//creating table
export default mongoose.model("Task", taskSchema) //will create a taable name tasks

//queries