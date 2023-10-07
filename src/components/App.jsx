import React from "react";

import { ContactsRender } from "./ContactRender/ContactsRender";
// import { searchContact} from "../redux/contactsSlice"
import { Form } from "./Form/Form";
import { SearchContact } from "./SearchContact";


import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact, deleteContact } from "../redux/contactsSlice";


export const App = () => { 
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter.filter)
  const dispatch = useDispatch();


const formSubmitHandler = (name, number) =>{  
 const newContact = {
    id: nanoid(), name: name, number: number
  } 
 const isContactExist = contacts.find(contact => contact.name === name)
 if(isContactExist){
   alert("Contact with such name already exists in the phonebook")
   return
 }
  console.log(newContact)
  dispatch(addContact(newContact));
 }

const handleDeleteContact = (id) => {
  dispatch(deleteContact(id));
};

const filteredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filter))
  return (
  <div style={{ width: '400px', margin: '0 auto',padding: '10px', border: '1px solid blue' }}>

      <Form onSubmit={formSubmitHandler} />
      
      <SearchContact />
     <ContactsRender onDeleteContact={handleDeleteContact} contacts={filteredContacts || contacts}  />
 
    </div>
  );
};
