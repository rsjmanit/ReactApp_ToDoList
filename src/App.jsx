import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [listitem, setListItem] = useState("");
  const [list, setList] = useState([]);

  const itemEvent = (event) => {
    setListItem(event.target.value);
  };

  const itemClick = () => {
    if (listitem == "") {
      alert("First Write something");
      return;
    }
    setList((olditems) => {
      return [...olditems, listitem];
    });
    setListItem("");
  };

  const deleteItem = (id) => {
    setList((olditems) => {
      return olditems.filter((element, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Item"
            onChange={itemEvent}
            value={listitem}
          />
          <button onClick={itemClick}> + </button>
          <ol>
            {list.map((entry, index) => {
              return (
                <ToDoList
                  text={entry}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
