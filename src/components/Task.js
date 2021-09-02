import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.title}{" "}
        <FaTimes
          style={{ cursor: "pointer" }}
          onDoubleClick={() => onDelete(task.id)}
        />
      </h3>
      <p>
        {task.start} - {task.end}
      </p>
    </div>
  );
};

export default Task;
