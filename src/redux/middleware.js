import { saveContactsToLocalStorage } from './contactsSlice'; 

export const persistMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === 'contacts/addContact' || action.type === 'contacts/deleteContact') {
    const state = store.getState();
    saveContactsToLocalStorage(state.contacts);  
  }

  return result;
};