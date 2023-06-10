// Model does the queries

import TaskSchema from "./TaskSchema";

// C create data in db
export const createTask = taskObj =>{
    return TaskSchema(taskObj).save();
}