export const TodoItem = ({ todo, onDeleteTodo, onToogleTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between mb-3 border-1 border-black ${
        todo.done ? "bg-success" : "bg-danger"
      }`}
    >
      <span
        className={`align-self-center text-white ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => onToogleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-outline-light " onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
