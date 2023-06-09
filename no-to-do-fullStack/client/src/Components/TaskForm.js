import { Button, FloatingLabel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const TaskForm = () => {
  return (
    <Form className=" border p-2 bg-light rounded">
      <Row className="g-2">
        <Col md="6">
          <FloatingLabel controlId='floatingInput' label="Add New Task" className='mb-3'>
          <Form.Control required placeholder="Add Task" name="task" />
          </FloatingLabel>
        </Col>
        <Col md="2">
          <Form.Control required placeholder="3" type="number" aria-describedby='hoursHelpBlock'/>
          <Form.Text id="hoursHelpBlock" muted> Type how many hours you want to allocated for the task </Form.Text>
        </Col>
        <Col className="d-grid">
          <Button variant="primary">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
}
