import React,{useEffect,useState} from "react";
import { Form,Button } from "react-bootstrap"; 
import { useDispatch,useSelector } from "react-redux";
import { useMatch,useNavigate } from "react-router-dom";
import { editContact, getContact } from "../JS/Actions/contact";

const Edit=()=> {
    const [newContact,setNewContact]=useState({});
    const dispatch=useDispatch();
    const match=useMatch("/edit/:id");
    console.log (match.params.id)
    const navigate=useNavigate();
    const contactToGet = useSelector(
        (state) => state.contactReducer.contactToGet
    );
    console.log(contactToGet)
    const handeleChange=(e)=>{
        setNewContact({...newContact,[e.target.name]:e.target.value});
    };
    useEffect(()=>{dispatch(getContact(match.params.id))});

    const handeleEdit =()=>{
        dispatch(editContact(match.params.id,newContact));
        navigate(-1);

    }
    return(
        <div>
            <Form.Label>name</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${contactToGet.name}`}
        name='name'
        value={newContact.name}
        onChange={handeleChange}
       
      />

<Form.Label>email adress</Form.Label>
      <Form.Control
        type="email"
       placeholder={`${contactToGet.email}`}
        name='email'
        value={newContact.email}
        onChange={handeleChange}
       
      />

<Form.Label>phone</Form.Label>
      <Form.Control
        type="text"
       placeholder={`${contactToGet.phone}`}
        name='phone'
        value={newContact.phone}
        onChange={handeleChange}
       
      />


        <Button variant="primary" type='submit'onClick={handeleEdit}>Edit</Button>
    
        </div>
    );
};

export default Edit;