import { useCounter } from "../hooks/useCounter";

export const CounterWhitCustomHook = () => {

  const { counter, handleSubmit } = useCounter()
  

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary mx-2" onClick={() => handleSubmit("sum", 10)} >+1</button>
      <button className="btn btn-primary mx-2" onClick={() => handleSubmit("reset")}>Reset</button>
      <button className="btn btn-primary" onClick={() => handleSubmit("rest", 4)}>-1</button>
    </>
  );
};
