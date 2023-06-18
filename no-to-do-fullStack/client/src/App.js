
import './App.css';
import { TaskForm } from './Components/TaskForm';
import { Col, Container, Row  } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TaskContainer } from './Components/TaskContainer.js';

function App() {
  return (
    <div className='wrapper'>
      <Container>
        <Row>
          <Col className='mt-5 text-center fs-1 mb-2'>Task Mgmt</Col>
        </Row>
        {/* from */}
        <TaskForm />

        {/* task display table */}
        <TaskContainer  />

      </Container>
      <ToastContainer/>
      </div>
  );
}

export default App;
