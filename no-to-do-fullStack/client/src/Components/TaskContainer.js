import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAction, getTaskList, updateTask} from '../redux/taskAction'

export const TaskContainer = () => {

  const dispatch = useDispatch();
  const {taskList} = useSelector((state) => state.tasks);

  const [ids, setIds] = useState([])

  useEffect(() => {
    dispatch(getTaskList())
  }, [dispatch])

  const handleOnSwitch = (obj) =>{
    if(window.confirm("Are you sure yoou want to switch this task")){
      dispatch(updateTask(obj))
    }
  }

  const entryList = taskList.filter(({type}) => type === "entry" );
  const badList = taskList.filter(({type}) => type === "bad" );

  const handleOnSelect = (e) =>{
    const {value, checked} = e.target;
    checked 
    ? setIds([...ids, value])
    : setIds(ids.filter((id) => id !== value));
  }

  const handleOnDelete = () =>{
    if(window.confirm("Are you sure want to delete the tasks")){
      dispatch(deleteTaskAction(ids));
      setIds([]);
    }
  }

  const total = taskList.reduce((acc, {hr}) => acc + hr, 0);


  console.log(ids)

  return (
    <div>
        <Row className='mt-5'>
          <Col>
          <h3 className='text-center'>Entry List</h3>
          <hr/>
          <Table striped bordered hover className='bg-none' variant ="dark">
            <tbody>
                {entryList.map((item, i) =>(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <div className='d-flex'>
                        <Form.Check value={item._id} onChange={handleOnSelect}/> {item.task}
                      </div>
                    </td>
                    <td>{item.hr}</td>
                    <td>
                      <Button 
                        variant='info' 
                        title='Mark as bad list' 
                        onClick={() => handleOnSwitch({_id: item._id, type: "bad"})}
                      >
                      <i class="fa-solid fa-arrow-right"></i>
                      </Button>
                    </td>
                </tr>
                ))}
            </tbody>
          </Table>
          </Col>
          <Col>
          <h3 className='text-center'>Bad List</h3>
          <hr/>
          <Table striped bordered hover className='bg-none'>
            <tbody>
                {badList.map((item, i) =>(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <div className='d-flex'>
                        <Form.Check value={item._id} onChange={handleOnSelect} />
                      {item.task}
                      </div>
                    </td>
                    <td>{item.hr}</td>
                    <td>
                      <Button 
                        variant='danger' 
                        title='Mark as bad entry' 
                        onClick={() => handleOnSwitch({_id: item._id, type: "entry"})}
                      >
                      <i class="fa-solid fa-arrow-left"></i>
                      </Button>
                    </td>
                </tr>
                ))}
            </tbody>
          </Table>
          </Col>
        </Row>
        <Row>
          <Col>
          {ids.length > 0 && (
            <div className='d-grid'>
              <Button variant='danger' onClick={handleOnDelete}>
                Delete{ids.length} tasks
              </Button>
            </div>
          )}
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>
            Total hours {total} hrs
          </h3>
          </Col>
        </Row>
    </div>
  )
}
