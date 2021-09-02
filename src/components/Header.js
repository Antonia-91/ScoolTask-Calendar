import React, { useState } from "react";
import AddTask from "../components/AddTask";

const Header = ({ onAdd }) => {
  //const [showAddTask, setShowAddTask] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // const onclick = () => {
  //   setShowAddTask(!showAddTask);
  // };

  return (
    <header className="header">
      <h1>TODO</h1>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Todo
      </button>
      <AddTask
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={onAdd}
      />
    </header>
  );
};

export default Header;

//////  USE THIS !!!!?????

//// alterativ 2 ////
// return (
//     <header className="header">
//       <h1>TODO</h1>
//       <button
//         style={{ backgroundColor: "black" }}
//         className="btn"
//         onClick={onclick}
//       >
//         {showAddTask ? "Close" : "New Todo"}
//       </button>
//       {showAddTask && <AddTask onAdd={onAdd} />}
//     </header>
//   );
