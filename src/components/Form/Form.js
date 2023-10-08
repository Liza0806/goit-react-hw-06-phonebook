import React, { useState } from "react";
import {
  FormContainer,
  Label,
  Input,
  SubmitButton
} from "./Form.styled.jsx";

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number
    };
    const isContactExist = contacts.find((contact) => contact.name === name);
    if (isContactExist) {
      alert("Contact with such name already exists in the phonebook");
      reset();
      return;
    }
    console.log(newContact);
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormContainer action="" onSubmit={formSubmitHandler}>
      <Label>
        Type name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Type tel
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormContainer>
  );
};
