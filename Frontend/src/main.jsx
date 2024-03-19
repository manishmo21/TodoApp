import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo } from "./utils/HandleApi";

function Main() {
const [toDo,setToDo]=useState([]);
useEffect(()=>{
  getAllToDo(setToDo)
},[]);
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input type="text" placeholder="Add Tasks........." />
         <div className="add">Add</div>
        </div>
        <div className="list">
             {toDo.map((item) => <ToDo key={item._id} text={item.text}/>)}
        </div>
      </div>
    </div>
  );
}

export default Main;
