import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../JS/Actions/contact'
import { Link } from 'react-router-dom'

const Add = () => {
    const [newContact,setNewContact]= useState({});
    const dispatch=useDispatch();
    const handeleChange=(e)=>{
        setNewContact({...newContact,[e.target.name]:e.target.value});
    };
    const add=()=>{
        dispatch(addContact(newContact));

    };
  return (
    <div>
   <Form.Label>name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        name='name'
        value={newContact.name}
        onChange={handeleChange}
       
      />
         <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        name='email'
        value={newContact.email}
        onChange={handeleChange}
       
      />
         <Form.Label>phone</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter phone"
        name='phone'
        value={newContact.phone}
        onChange={handeleChange}
       
      />
      <Link to='/contact'>
        <Button variant="primary" type='submit'onClick={()=>add()}>Add</Button>
      </Link>
    </div>
  )
}

export default Add