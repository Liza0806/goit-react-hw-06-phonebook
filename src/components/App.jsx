import React from "react";
import { ContactsRender } from "./ContactRender/ContactsRender";
import { Form } from "./Form/Form";
import { SearchContact } from "./SearchContact";

export const App = () => { 

  return (
    
  <div style={{ width: '400px', margin: '0 auto',padding: '10px', border: '1px solid blue' }}>

      <Form />
      <SearchContact />
     <ContactsRender />
 
    </div>
  );
};
