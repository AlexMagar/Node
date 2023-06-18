import express from "express"
import  {createTask, deleteTaskById, readTasks, switchTask}  from "../model/TaskModel.js";


const router = express.Router();

// let fakeDb = [
//     {
//         "task": "sf tv",
//         "hr": 22,
//         "type": "entry",
//         "_id": "001"
//       },
//       {
//         "task": "sf tv",
//         "hr": 22,
//         "type": "entry",
//         "_id": "002"
//       },
//       {
//         "task": "sf tv",
//         "hr": 22,
//         "type": "entry",
//         "_id": "003"
//       },
//       {
//         "task": "sf tv",
//         "hr": 22,
//         "type": "entry",
//         "_id": "004"
//       }
// ];


//read data from database and return to the client
router.get("/", async (req,res) =>{

    try {
        //get data from db
        const taskList = await readTasks();
        console.log("Can i see what in here: ",taskList)

        taskList?.length
        ?
        //do database query
        res.json({
            status: "success",
            message: "From Get method",
            taskList,
        })
        : res.json({
            status: "error",
            message: "could not do GET method"
        })
    } catch (error) {
        res.json({
            status: "error",
            message: "Something wrong with the GET method"
        })
        console.log(error)
    }
});

//receive data from client and create new record into the database
router.post("/", async (req,res) =>{

    try {
        const result = await createTask(req.body);

        result?._id                                                                                                                                                                                                                                                                                                                   
        ? res.json({
            status: "success",
            message: "New task has been added sucessfully",
        })
        : res.json({
            status: "error",
            message: "unable to add the data",
        });
    } catch (error) {
        res.json({
            status: "error",
            message: error.message,
        });
        console.log(error)
    }
});

// fakeDb[3].type= "bad";
// console.log(fakeDb);
//update data from client and create new record into the database
router.put("/", async (req,res) =>{
    // console.log(req.body._id);
    // fakeDb = fakeDb.map((item) => {
    //     if(item._id === _id){
    //         item.type = type;
    //         return { ...item, type};
    //     }
    //     return item;
    // })

    try {
        const { _id, type} = req.body; //destructure


        // update the db
        const result = await switchTask(_id, type);
        result?._id
        ? res.json({
            status: "success",
            message: "The task has been switched successfully"
        })
        : res.json({
            status: "error",
            message: "The task did not switched"
        });
        
    } catch (error) {
        console.log(error)

        res.json({
            status: "error",
            message: "The task did not switched"
        })
        
    }
})

//delete data from client and create new record into the database
router.delete("/", async (req,res) =>{

    // console.log("what is in delete: ",req.body)
    // fakeDb.pop(req.body);

    //deleting item from fakeDb and overiding the data
    // fakeDb = fakeDb.filter((item) => item._id !== _id);

    try {
        const result = await deleteManyTasks(req.body);

        result?.deleteCount > 0
        ? res.json({
            status: "success",
            message: "The tasks been deleted successfully"
        })
        : res.json({
            status: "error",
            message: "unable to delete the task"
        })
        
    } catch (error) {
        console.log(error) // clg - shortcut for console.log()

        res.json({
            status:"error",
            message: "Error deleting the task"
        })
    }
})
export default router;