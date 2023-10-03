const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/components/TodoItem");

describe("Prueba en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Encontrar una tijera",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el Todo Pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToogleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between mb-3 border-1 border-black bg-danger"
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("align-self-center text-white");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("Debe de mostrar el Todo completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToogleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("Span debe de llamar el ToggleTodo cuando se hace click ", () => {
    render(
      <TodoItem
        todo={todo}
        onToogleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  });
  test("Button debe de llamar el deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onToogleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  });
});
