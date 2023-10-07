import {ContactsList,
       ContactItem,
       ContactName,
       ContactNumber,
       DeleteButton} from "./ContactsRender.styled.jsx"

export const ContactsRender = ({onDeleteContact, contacts }) => {

    return (
      <ContactsList>
        {contacts && contacts.map(contact => (
          <ContactItem key={contact.id}>
          <ContactName> name: {contact.name},</ContactName><ContactNumber>tel: {contact.number}</ContactNumber>
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>X</DeleteButton>
          </ContactItem>
        ))}
      </ContactsList>
    );
  };
