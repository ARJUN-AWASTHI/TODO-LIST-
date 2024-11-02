import React, { useContext } from "react";
import { TodoContext } from "../Contexts/Context";
import { ImCross } from "react-icons/im";

function Todo() {
  const { values, setvalues } = useContext(TodoContext);
  const removeTodo = (indexToRemove) => {
    
    const updatedValues = values.filter((_, index) => index !== indexToRemove);
    
    setvalues(updatedValues);
  };

  return (
    <>
      {values.map((v, index) => (
        <div
          key={index}
          className="h-[50px] text-lg flex justify-between p-2 items-center border-t-2 border-slate-300 w-full"
        >
          {v.string}

          <ImCross
            onClick={() => removeTodo(index)}
            style={{ color: "rgb(113 113 122)" }}
          />
        </div>
      ))}
    </>
  );
}

export default Todo;
