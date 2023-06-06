import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const TaskForm = () => {
  return (
    <Form className=" border p-2 bg-light rounded">
      <Row className="g-2">
        <Col md="6">
          <Form.Control required placeholder="watching tv" name="task" />
        </Col>
        <Col md="2">
          <Form.Control required placeholder="33" type="number" />
        </Col>
        <Col className="d-grid">
          <Button variant="primary">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
}
