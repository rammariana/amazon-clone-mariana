//setup data layer
// we need this to track the basket

import { createContext, useContext, useReducer } from "react";

// DATA LAYER
export const StateContext = createContext();

//build provider
export const StateProvider = ({ reducer, inicialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, inicialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
