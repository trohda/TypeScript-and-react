import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const toDos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={toDos} />
    </div>
  );
};

export default App;
