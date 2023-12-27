/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  // state of the json data
  const [userSchema, setUserSchema] = useState("");

  const value = {
    userSchema,
    setUserSchema,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StateContextProvider;
