import React, { createContext, useState } from "react";
export const TodoContext = createContext();
const Context = (props) => {
  const [values, setvalues] = useState([
    { string: "walk the dog" },
    { string: "read a book" },
    { string: "read a book" },
  ]);
  return (
    <TodoContext.Provider value={{ values, setvalues }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default Context;
