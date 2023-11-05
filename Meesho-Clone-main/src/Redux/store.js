import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

let initialStore = { cart: [], count: 0, step: 0, address: {}, name: "User" };

if (localStorage.getItem("cart")) {
  initialStore.cart = JSON.parse(localStorage.getItem("cart"));
  initialStore.count = initialStore.cart.length;
}
if (localStorage.getItem("name")) {
  initialStore.name = localStorage.getItem("name");
}

export const store = legacy_createStore(reducer, initialStore);
