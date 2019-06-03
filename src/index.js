import { createStore } from "redux";

const Counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(Counter);

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

const render = () => {
  document.body.innerHTML = store.getState();
};
render();
store.subscribe(() => {
  render();
});
