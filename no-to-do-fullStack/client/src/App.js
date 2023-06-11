import logo from './logo.svg';
import './App.css';
import { TaskForm } from './Components/TaskForm';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchTasks } from './helper/axiosHelper';
import { useState } from 'react';
import { TaskContainer } from './Components/TaskContainer';

function App() {

  const [list, setlist] = useState([]);

  const getTaskList = async () =>{
    const {status, taskList} = await fetchTasks();

    if(status === "sucess" && taskList.length){
      setlist(taskList);
    }
  }

  return (
    <div className='wrapper'>
      <Container>
        <Row>
          <Col className='mt-5 text-center fs-1 mb-2'>Task Mgmt</Col>
        </Row>
        {/* from */}
        <TaskForm getTaskList={getTaskList}/>

        {/* task display table */}
        <TaskContainer list={list}/>

      </Container>
      <ToastContainer/>
      </div>
  );
}

export default App;
