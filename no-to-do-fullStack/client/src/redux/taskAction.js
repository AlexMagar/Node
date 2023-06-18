import { toast } from "react-toastify";
import { fetchTasks, postTask, switchTask } from "../helper/axiosHelper";
import { setTaskList } from "./taskSlice";
import { deleteTasks } from "../helper/axiosHelper";

export const getTaskList = () => async (dispatch) => {
  const { status, taskList } = await fetchTasks();

  if (status === "success" ) {
    // setList(taskList);
    dispatch(setTaskList(taskList));
  }
};

export const addTaskList = (taskObj) => async (dispatch) => {
  try {
    //send data to the api
    const respPromise = postTask(taskObj);

    toast.promise(respPromise, {
      pending: "please wait....",
    });
    const { status, message } = await respPromise;

    toast[status](message);

    if (status === "success") {
      //call the api to fetch all the tasks
      dispatch(getTaskList());
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateTask = taskObj => async dispatch =>{
    const dataPending = switchTask(taskObj);

    toast.promise(dataPending, {
        pending: "please wait..."
    })

    const {status, message} = await dataPending;
    
    toast[status](message)

    if(status === 'sucess'){
        dispatch(getTaskList());
    }
}

export const deleteTaskAction = ids => async (dispatch) =>{
    const pendingResp = deleteTasks(ids);                                                                                                                                                                                

    toast.promise(pendingResp, {
        pending: "please wait..."
    });

    const {status, message} = await pendingResp;
    toast[status](message);

    if(status === "sucess"){
        dispatch(getTaskList());
    }
}