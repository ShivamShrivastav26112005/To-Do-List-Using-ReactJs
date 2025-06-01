import { useState } from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

function App() {
  const initialTodoItems = [
    { name: "Buy Milk", dueDate: "22/03/2025" },
    { name: "Go to college", dueDate: "22/03/2025" },
    { name: "Like this video", dueDate: "right now" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    if (!itemName.trim() || !itemDueDate) return;
    setTodoItems([...todoItems, { name: itemName, dueDate: itemDueDate }]);
  };

  const handleDeleteItem = (todoName) => {
    setTodoItems(todoItems.filter((item) => item.name !== todoName));
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      {todoItems.map((item, index) => (
        <ToDoItem
          key={index}
          name={item.name}
          dueDate={item.dueDate}
          onDeleteClick={handleDeleteItem}
        />
      ))}
    </center>
  );
}

export default App;
