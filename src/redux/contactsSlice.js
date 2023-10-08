import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
initialState: [], 
  reducers: {
    
    addContact: (state, action) => {
      state.push(action.payload);; 
    },

    deleteContact: (state, action) => {
      const updatedState = state.filter(contact => contact.id !== action.payload);
     return  updatedState
     },   
  },
} 
);
export const saveContactsToLocalStorage = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
 };
export const { addContact, deleteContact, searchContact } = contactsSlice.actions;
export default contactsSlice.reducer;
