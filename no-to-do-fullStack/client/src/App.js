import logo from './logo.svg';
import './App.css';
import { TaskForm } from './Components/TaskForm';
import { Col, Container, Row, Table } from 'react-bootstrap';

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col className='mt-5 text-center fs-1 mb-2'>Task Mgmt</Col>
        </Row>
        {/* from */}
        <TaskForm/>

        {/* task display table */}
        <Row className='mt-5'>
          <Col>
          <h3 className='text-center'>Entry List</h3>
          <hr/>
          <Table striped bordered hover className='bg-transparent'>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          </Col>
          <Col>
          <h3 className='text-center'>Bad List</h3>
          <hr/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
