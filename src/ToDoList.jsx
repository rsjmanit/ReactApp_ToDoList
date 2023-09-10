import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <DeleteForeverIcon
          className="icon"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
