import { useState } from 'react';
import { Button, FloatingLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { fetchTasks, postTask } from '../helper/axiosHelper';
import { toast } from 'react-toastify';


export const TaskForm = ({getTaskList}) => {

  const  [form, setForm] = useState({});

  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: name,
    })
  }

  console.log(form)

  const handleOnSubmit = async (e) =>{
    e.preventDefault(); //prevent from browser reloading
    console.log(form)

    //send data to the api
    const respPromise = postTask(form);

    toast.promise(respPromise, {
      pending: "please wait....",
    });

    const {status, message} = await respPromise;
    console.log(status)
    toast[status](message);

    if(status === 'success'){
      //call the api to fetch all the task
     getTaskList();
      // console.log(data)
    }
  };

  return (
    <Form className=" border p-2 bg-light rounded" onSubmit={handleOnSubmit}>
      <Row className="g-2">
        <Col md="6">
          <FloatingLabel controlId='floatingInput' label="Add New Task" className='mb-3'>
          <Form.Control required placeholder="Add Task" name="task" onChange={handleOnChange}/>
          </FloatingLabel>
        </Col>
        <Col md="2">
          <Form.Control required placeholder="3" name="hr" type="number" onChange={handleOnChange}/>
          {/* <Form.Text id="hoursHelpBlock" muted> Type how many hours you want to allocated for the task </Form.Text> */}
        </Col>
        <Col className="d-grid">
          <Button variant="primary" type='submit'>Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
}
