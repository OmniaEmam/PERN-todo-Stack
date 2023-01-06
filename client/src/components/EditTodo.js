import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditTodo = ({todo}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [description , setDescription] = useState(todo.description);
     
    const updateDescription =async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:4000/todos/${todo.todo_id}` , {
                method: "PUT",
                headers: {"Content-Type" : "application/json" },
                body : JSON.stringify(body)
            });
            window.location = "/";
            
        } catch (err) {
            console.error(err.message);
            
        }
    }

    function closeFunction(){
        handleClose();
        setDescription(todo.description);
    }

    return (
        <Fragment>
            <>
                <Button  className="btn btn-warning btn-sm" variant="primary" onClick={handleShow} data-target={`#id${todo.todo_id}`}>
                   Edit
                </Button>

                <Modal show={show} onHide={handleClose} id={`id${todo.todo_id}`}>
                    <Modal.Header closeButton onClick={() => setDescription(todo.description)}>
                        <Modal.Title>Edit Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" 
                               className="form-control" 
                               value={description}
                               onChange={e => setDescription(e.target.value)}
                               />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeFunction}>
                            Close
                        </Button>
                        <Button 
                             variant="primary" 
                             onClick={e => updateDescription(e)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </Fragment>
    )
};

export default EditTodo;