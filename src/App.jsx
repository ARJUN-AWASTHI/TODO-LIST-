import React, { useState } from "react";
import Heading from "./Components/Heading";
import Search from "./Components/Search";
import AllTodos from "./Components/AllTodos";

function App() {
  return (
    <div className=" bg-zinc-200 p-3 mx-auto w-[600px] h-screen ">
      <Heading />
      <Search />
      <AllTodos />
    </div>
  );
}

export default App;
