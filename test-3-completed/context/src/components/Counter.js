import React, { useReducer, createContext } from "react";

export const myContext = createContext();
const initialState = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
};

function Counter({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ state, dispatch }}>
      {children}
    </myContext.Provider>
  );
}

export default Counter;
