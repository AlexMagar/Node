import express from "express"
const router = express.Router();

let fakeDb = [
    {
        "task": "sf tv",
        "hr": 22,
        "type": "entry",
        "_id": "001"
      },
      {
        "task": "sf tv",
        "hr": 22,
        "type": "entry",
        "_id": "002"
      },
      {
        "task": "sf tv",
        "hr": 22,
        "type": "entry",
        "_id": "003"
      },
      {
        "task": "sf tv",
        "hr": 22,
        "type": "entry",
        "_id": "004"
      }
];


//read data from database and return to the client
router.get("/", (req,res) =>{

    //do database query
    res.json({
        message: "List of task",
        data: fakeDb
    })
})

//receive data from client and create new record into the database
router.post("/", (req,res) =>{
    console.log("got hit", req.body);
    fakeDb.push(req.body);
    res.json({
        message: "New task has been added",
    })

})

// fakeDb[3].type= "bad";
// console.log(fakeDb);
//update data from client and create new record into the database
router.put("/", (req,res) =>{
    // console.log(req.body._id);
    const { type, _id} = req.body; //destructure
    fakeDb = fakeDb.map((item) => {
        if(item._id === _id){
            item.type = type;
            return { ...item, type};
        }
        return item;
    })

    res.json({
        message: "The task had been switched",
    })
})

//delete data from client and create new record into the database
router.delete("/", (req,res) =>{
    console.log("what is in delete: ",req.body)
    // fakeDb.pop(req.body);

    const { _id } = req.body; //destructure

    //deleting item from fakeDb and overiding the data
    fakeDb = fakeDb.filter((item) => item._id !== _id);

    res.json({
        message: "Deleted successfully",

    })
})


export default router;