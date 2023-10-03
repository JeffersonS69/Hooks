import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  const initialState2 = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
    {
      id: 2,
      description: "Demo2 Todo",
      done: false,
    },
    {
      id: 3,
      description: "Demo3 Todo",
      done: false,
    },
  ];

  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Nuevo Todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe de eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 2,
    };

    const newState = todoReducer(initialState2, action);

    expect(newState.length).toBe(2);
    expect(newState.length).toBeGreaterThan(0);
  });

  test("Debe de realizar el Toggle del Todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
