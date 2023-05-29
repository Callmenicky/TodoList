import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from "react-toastify";
import Form from 'react-bootstrap/Form';

const CRUD2 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [due_date, setDue_date] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Medium');

  const [editID, setEditId] = useState('');
  const [editname, setEditName] = useState('');
  const [editdescription, setEditDescription] = useState('');
  const [editdue_date, setEditDue_date] = useState('');
  const [editstatus, setEditStatus] = useState('Pending');
  const [editpriority, setEditPriority] = useState('Medium');

  const [filterOption, setFilterOption] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  const empdata = [
    {
      id: 1,
      name: 'Sweep the floor',
      description: 'Sweep the floor and the room',
      due_date: '25th August 2023',
      status: 'Pending',
      priority: 'High',
    },
    {
      id: 2,
      name: 'Clean the fan',
      description: 'Clean the Fan of my room',
      due_date: '26th August 2023',
      status: 'In Progress',
      priority: 'Low',
    }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData(empdata);
  };

  const handleEdit = (id) => {
    handleShow();
    const item = empdata.find((item) => item.id === id);
    setEditName(item.name);
    setEditDescription(item.description);
    setEditDue_date(item.due_date);
    setEditStatus(item.status);
    setEditPriority(item.priority);
    setEditId(id);
  };

  const handleDelete = (id) => {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      toast.success('Task has been Deleted');
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) => {
      if (item.id === editID) {
        return {
          id: editID,
          name: editname,
          description: editdescription,
          due_date: editdue_date,
          status: editstatus,
          priority: editpriority
        };
      }
      return item;
    });

    setData(updatedData);
    handleClose();
    clear();
    toast.success('Task has been updated');
  };

  const handleSave = () => {
    const newItem = {
      id: data.length + 1,
      name: name,
      description: description,
      due_date: due_date,
      status: status,
      priority: priority,
    };

    setData([...data, newItem]);
    handleClose();
    clear();
    toast.success('New task has been added');
  };

  const clear = () => {
    setName('');
    setDescription('');
    setDue_date('');
    setStatus('Pending');
    setPriority('Medium');
  };

  const handleFilter = () => {
    if (filterOption && filterValue) {
      let filteredData = [];

      switch (filterOption) {
        case 'name':
          filteredData = data.filter((item) =>
            item.name.toLowerCase().includes(filterValue.toLowerCase())
          );
          break;
        case 'status':
          filteredData = data.filter((item) =>
            item.status.toLowerCase().includes(filterValue.toLowerCase())
          );
          break;
        case 'priority':
          filteredData = data.filter((item) =>
            item.priority.toLowerCase().includes(filterValue.toLowerCase())
          );
          break;
        default:
          break;
      }

      setData(filteredData);
    }
  };

  const handleSort = () => {
    if (sortOption && sortValue) {
      let sortedData = [];

      switch (sortOption) {
        case 'name':
          sortedData = data.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
          );
          break;
        case 'status':
          sortedData = data.sort((a, b) =>
            a.status.localeCompare(b.status, undefined, { sensitivity: 'base' })
          );
          break;
        case 'priority':
          sortedData = data.sort((a, b) =>
            a.priority.localeCompare(b.priority, undefined, { sensitivity: 'base' })
          );
          break;
        default:
          break;
      }

      if (sortValue === 'desc') {
        sortedData.reverse();
      }

      setData(sortedData);
    }
  };

  return (
    <Fragment>
        <ToastContainer></ToastContainer>
        <Container>
        <h1 className="mt-4 mb-4" data-testid="crud-heading">TodoList Application</h1>
        <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                type="date"
                placeholder="Enter Due Date"
                value={due_date}
                onChange={(e) => setDue_date(e.target.value)}
                />
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                >
                <option value="Very High">Very High</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </Form.Select>
            </Form.Group>
            </Row>

            <Button variant="primary" onClick={() => handleSave()}>
            Submit
            </Button>
        </Form>
        </Container>
        <br></br>
        <Container>
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center">
            <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formFilter" className="mr-3 mb-0">
                <Form.Label>Filter</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter filter criteria"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formSort" className="ml-3 mb-0">
                <Form.Label>Sort</Form.Label>
                <Form.Control
                as="select"
                value={sortValue}
                onChange={(e) => setSortValue(e.target.value)}
                >
                <option value="">Select</option>
                <option value="name">Name</option>
                <option value="duedate">Due Date</option>
                <option value="priority">Priority</option>
                {/* Add more options as needed */}
                </Form.Control>
            </Form.Group>
            </Row>
            </Form>
            </div>
            <br></br>
            <div>
            <Button variant="secondary" onClick={handleFilter}>Filter</Button>{' '}
            <Button variant="secondary" onClick={handleSort}>Sort</Button>
            </div>
         </div>
        </Container>
        <br></br>
        <Table striped bordered hover>
            <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.due_date}</td>
                        <td>{item.status}</td>
                        <td>{item.priority}</td>
                        <td colSpan={2}>
                                        <button className="btn btn-primary" onClick={()=> handleEdit(item.id)}>Edit</button> &nbsp;
                                        <button className="btn btn-primary" onClick={()=> handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>                     
                ))}
            </tbody>

        </Table>

        <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Update Todo Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                <Col>
                    <Form.Control type="text" placeholder="Enter Name" value={editname} onChange={(e) => setEditName(e.target.value)} />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Enter Description" value={editdescription} onChange={(e) => setEditDescription(e.target.value)} />
                </Col>
                <Col>
                    <Form.Control type="date" placeholder="Enter Due Date" value={editdue_date} onChange={(e) => setEditDue_date(e.target.value)} />
                </Col>
                <Col>
                    <Form.Select value={editstatus} onChange={(e) => setEditStatus(e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select value={editpriority} onChange={(e) => setEditPriority(e.target.value)}>
                    <option value="Very High">Very High</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    </Form.Select>
                </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
    </Fragment>
)
}

export default CRUD2;

