import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getcontacts } from "../JS/Actions/contact";
import ContactCard from "./ContactCard";

const ContactList =()=>{
    const dispatch=useDispatch();
    const listContacts = useSelector(
        (state)=> state.contactReducer.listContacts
    );
    const load= useSelector((state)=>state.contactReducer.load);
    useEffect(()=>{
        dispatch(getcontacts());
    },[dispatch]);

    return(
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap:'Wrap',
            justifycontent:'space-around',
            marginTop: '100px'
        }}>
            {load ?(
                <h2>loadinggg...</h2>
            ):(listContacts.map((el)=><ContactCard contact={el} key={el._id}/>))}
         </div>
    );
};

export default ContactList