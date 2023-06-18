import { useState } from 'react';
import { Button, FloatingLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { addTaskList } from '../redux/taskAction';


export const TaskForm = ({getTaskList}) => {
  const dispatch = useDispatch();

  const  [form, setForm] = useState({});

  // const {addTaskList}

  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    console.log("Name is: ",name + " Value is: ", value);

    setForm({
      ...form,
      [name]: value,
    })
  }
  console.log("what is comming from the form: ",form)


  const handleOnSubmit = async (e) =>{
    e.preventDefault(); //prevent from browser reloading

    //check if availabe hr is enough

    console.log("i am also from form:",form)

    dispatch(addTaskList(form));
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
