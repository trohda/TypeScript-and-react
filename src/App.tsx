import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<Todo[]>([]);
  // [{ id: "t1", text: "Finish the course" }];
  const todoAddHandler = (text: string) => {
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={toDos} />
    </div>
  );
};

export default App;
