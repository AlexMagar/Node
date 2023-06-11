import React from 'react'
import { Col, Row, Table } from 'react-bootstrap';

export const TaskContainer = ({list}) => {
  return (
    <div>
        <Row className='mt-5'>
          <Col>
          <h3 className='text-center'>Entry List</h3>
          <hr/>
          <Table striped bordered hover className='bg-none'>
            <tbody>
                {list.map((item, i) =>(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr}</td>
                    <td>buttons</td>
                </tr>
                ))}
            </tbody>
          </Table>
          </Col>
          <Col>
          <h3 className='text-center'>Bad List</h3>
          <hr/>
          </Col>
        </Row>
    </div>
  )
}
