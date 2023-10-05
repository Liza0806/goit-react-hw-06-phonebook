import { createStore } from "redux";
import { useSelector } from "react-redux";

import { devToolsEnhancer } from "@redux-devtools/extension";
const initialState = {
    contacts: [],
    filters: {
      status: "all",
    },
  };

  const rootReducer = (state = initialState, action) => {
    return state;
  };
 // export const store = createStore(rootReducer);
  const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);