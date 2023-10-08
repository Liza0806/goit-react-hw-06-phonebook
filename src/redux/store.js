import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers, configureStore, } from '@reduxjs/toolkit';

import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice"
import storage from 'redux-persist/lib/storage';
 import { persistMiddleware } from './middleware';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['filter'], 

};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  })
);


export const store = configureStore({
  reducer: persistedReducer,
   middleware: [ persistMiddleware], 
});
export const persistor = persistStore(store);