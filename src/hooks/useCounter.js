import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  // Opcion 1

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const decrement = (value = 1) => {
    // if (counter === 0) return;
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  //Opcion 2

  const handleSubmit = (expression, value) => {
    switch (expression) {
      case "sum":
        setCounter(counter + value);
        break;
      case "reset":
        setCounter(initialValue);
        break;
      case "rest":
        // if (counter === 0) return;
        setCounter(counter - value);
        break;
    }
  };

  return {
    counter,
    handleSubmit,
    reset,
    increment,
    decrement,
  };
};
