import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/08-useReducer/hooks/useTodos";

jest.mock("../../src/08-useReducer/hooks/useTodos");

describe("Prueba en <TodoApp />", () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Todo #1",
        done: true,
      },
      {
        id: 2,
        description: "Todo #2",
        done: false,
      },
      {
        id: 3,
        description: "Todo #3",
        done: false,
      },
    ],
    todosCount: 3,
    pendingTodosCount: 2,
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToogleTodo: jest.fn(),
  });
  test("Debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText('Todo #1')).toBeTruthy()
    expect(screen.getByText('Todo #2')).toBeTruthy()
    expect(screen.getByText('Todo #3')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  });
});
