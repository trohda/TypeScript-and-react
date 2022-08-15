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

  const todoDeleteHandler = (todoId: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={toDos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
