import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "Add") { return count + 1 }
  else if (action.type === "Minus") { return count - 1 }
  else return count;
};
const countStore = createStore(countModifier);
console.log(countStore.getState());

add.addEventListener("click", () => { countStore.dispatch({ type: "Add" }) });
minus.addEventListener("click", () => { countStore.dispatch({ type: "Minus" }) });

// countStore.dispatch({ type: "Add" });
// countStore.dispatch({ type: "Minus" });

// let count = 0;
// number.innerText = count;

// const handleAdd = () => {
//   // console.log("add")
//   // 
//   count++;
//   updateText();
// };

// const handleMinus = () => {
//   count--;
//   updateText();
// };

// const updateText = () => {
//   number.innerText = count
// };


// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);