import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/pages/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <LoginPage/>", () => {
  const setUserMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("Debe de mostrar el componente sin el usuario ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const Tag = screen.getByLabelText("pre");

    expect(Tag.innerHTML).toBe("null");
  });

  test("Debe de llamar el setUser cuando se hace click en el boton ", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonTag = screen.getByRole("button");

    fireEvent.click(buttonTag)

    expect(setUserMock).toHaveBeenCalledWith({"email": "jeff@gmail.com", "id": 123, "name": "Jefferson Garcia"})
  });
});
