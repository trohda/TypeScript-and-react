interface TodoListPRops {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListPRops> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
