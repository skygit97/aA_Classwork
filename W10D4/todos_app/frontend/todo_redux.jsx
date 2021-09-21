import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import Root from "./components/root";

import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_actions";
import { receiveSteps, receiveStep, removeStep } from "./actions/step_actions";
import { allTodos } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();

	window.store = store;

	window.receiveTodos = receiveTodos;
	window.receiveTodo = receiveTodo;
	window.removeTodo = removeTodo;

	window.receiveSteps = receiveSteps;
	window.receiveStep = receiveStep;
	window.removeStep = removeStep;

	window.allTodos = allTodos(store.getState());
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});
