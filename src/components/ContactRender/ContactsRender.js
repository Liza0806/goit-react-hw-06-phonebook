import {ContactsList,
       ContactItem,
       ContactName,
       ContactNumber,
       DeleteButton} from "./ContactsRender.styled.jsx"
import { deleteContact } from "../../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";

export const ContactsRender = () => {
   const dispatch = useDispatch();
   
   const contacts = useSelector((state) => state.contacts);
   const filter = useSelector((state) => state.filter.filter)
   const filteredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filter))
   
    return (
      <ContactsList>
        {(filteredContacts? filteredContacts : contacts).map(contact => (
          <ContactItem key={contact.id}>
          <ContactName> name: {contact.name},</ContactName><ContactNumber>tel: {contact.number}</ContactNumber>
            <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>X</DeleteButton>
          </ContactItem>
        ))}
      </ContactsList>
    );
  };
