import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../JS/Actions/contact';
import {useNavigate} from "react-router-dom";


const ContactCard = ({contact}) => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>

        <Button variant="primary" onClick={()=> navigate(`/edit/${contact._id}`)}>
Edit
        </Button>


        <Button variant="primary" onClick={()=> dispatch(deleteContact(contact._id))}>
Delete
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard