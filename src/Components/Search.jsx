import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { TodoContext } from "../Contexts/Context";

function Search() {
  const{ values , setvalues }=useContext(TodoContext);
  function getInputValue(){
    const input = document.querySelector('input');
    setvalues([...values ,{string : input.value}]);
    input.value = "";
  }
  return (
    <div className=" flex mt-6 h-[50px] justify-center gap-6">
      <div>
        <input
          className=" border-[3px] w-[500px] h-[50px] text-center border-blue-400 outline-none"
          type="text"
          placeholder="what needs to be done"
        />
      </div>
      <div onClick={()=> getInputValue()} className="flex justify-center items-center w-[50px] bg-sky-500">
        <FaPlus style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default Search;
