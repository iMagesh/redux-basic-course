import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

function increment() {
  return store.dispatch({ type: "INCREMENT" });
}

function decrement() {
  return store.dispatch({ type: "DECREMENT" });
}

const Counter = () => {
  return (
    <div>
      {store.getState()}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

function render() {
  ReactDOM.render(<Counter />, document.getElementById("root"));
}
store.subscribe(render);
render();
