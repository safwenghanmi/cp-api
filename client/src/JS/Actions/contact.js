
import {
GET_CONTACTS,
LOAD_CONTACTS,
FAIL_CONTACTS,
GET_CONTACT,

} from "../ActionType/contact";

import axios from "axios";
// get all contacts
export const getcontacts= ()=>async(dispatch)=>{
    dispatch({type:LOAD_CONTACTS});
    try{
        let result= await axios.get("/api/contact/all")
        dispatch({type:GET_CONTACTS ,payload: result.data});
    }catch(error){
        dispatch({type:FAIL_CONTACTS , payload:error.response});
    }
};

//add contact 
export const addContact=(newContact) => async (dispatch) =>{
    try{
        await axios.post("/api/contact/add" , newContact);
        dispatch(getcontacts());

    }catch(error){
        dispatch({type:FAIL_CONTACTS , payload: error.response});
    }
};

//delete contact

export const deleteContact=(id)=>async (dispatch) =>{
    try{
        await axios.delete(`/api/contact/${id}`);
        dispatch(getcontacts());
    }catch(error){
        dispatch({type:FAIL_CONTACTS , payload: error.response});
    }
}

//edit contact

export const editContact=(id,newContact)=> async(dispatch)=>{
    try{
        await axios.put(`/api/contact/${id}`, newContact);
    }catch(error) {
            dispatch({type:FAIL_CONTACTS , payload: error.response});
    }
}

//get one

export const getContact=(id)=>async (dispatch)=>{
    console.log("fel action",id)
    try{
        let result = await axios.get(`/api/contact/${id}`);
      
        dispatch({type: GET_CONTACT, payload: result.data})
        console.log(result.data)

    }catch(error) {
        dispatch({type:FAIL_CONTACTS , payload: error.response});
}
};