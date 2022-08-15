import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const toDos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div className="App">
      <TodoList items={toDos} />
    </div>
  );
};

export default App;
