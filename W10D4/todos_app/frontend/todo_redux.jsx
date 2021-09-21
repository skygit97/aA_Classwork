import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import Root from "./components/root";

import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();

	window.store = store;
	window.receiveTodo = receiveTodo;
	window.receiveTodos = receiveTodos;
	window.removeTodo = removeTodo;

	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});
