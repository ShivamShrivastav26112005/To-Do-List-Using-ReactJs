import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    if (!todoName.trim() || !dueDate) {
      alert("Please enter both task name and due date.");
      return;
    }
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">

          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddButtonClicked}
            disabled={!todoName.trim() || !dueDate}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
