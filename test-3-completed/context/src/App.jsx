import { useContext } from "react";
import "./App.css";
import Counter, { myContext } from "./components/Counter";

function App() {
  const { state, dispatch } = useContext(myContext);
  return (
    <div className="App">
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default App;
