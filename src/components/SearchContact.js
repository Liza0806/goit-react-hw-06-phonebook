import React from "react";
import {
    FormContainerDiv,
    Label,
    Input,
} from "./Form/Form.styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice.js";

export const SearchContact =() => {
  
 const dispatch = useDispatch();

  const findContact = (event) => {
  
   const newFilter = event.target.value.toLowerCase();
console.log(newFilter) 

    dispatch(setFilter(newFilter));

  };

  
    return (
      <FormContainerDiv>
        <Label>Search contact:</Label>
        <Input type="text" onChange={findContact} />
      </FormContainerDiv>
    );
  
}
