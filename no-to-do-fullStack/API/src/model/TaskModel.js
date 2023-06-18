// Model does the queries

import TaskSchema from "./TaskSchema.js";

// create data in db
export const createTask = (taskObj) =>{
    console.log("what is comming in here show me please: ",taskObj);
    return TaskSchema(taskObj).save();
}

//
export const readTasks = () =>{
    return  TaskSchema.find();
}

// _id as an string
export const switchTask = (_id, type) =>{
    return TaskSchema.findByIdAndUpdate(_id, {type});
}

// delete data
export const deleteTaskById = (_id) =>{
    return TaskSchema.findByIdAndDelete(_id);
}

//delete many task
//@ids should be an array
export const deleteManyTasks = (ids) =>{
    return TaskSchema.deleteMany({
        _id:{
            $in: ids,
        }
    })
}