import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
initialState: JSON.parse(localStorage.getItem("contacts")) || [],
  
  reducers: {
    
    addContact: (state, action) => {
      state.push(action.payload);
      saveContactsToLocalStorage(state); 
    },

    deleteContact: (state, action) => {
      const updatedState = state.filter(contact => contact.id !== action.payload);
      saveContactsToLocalStorage(updatedState); 
     return  updatedState
     },
    
  },
} 
);
 const saveContactsToLocalStorage = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
 };
export const { addContact, deleteContact, searchContact } = contactsSlice.actions;
export default contactsSlice.reducer;
