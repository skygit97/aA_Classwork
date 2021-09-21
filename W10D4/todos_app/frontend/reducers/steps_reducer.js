import {
	RECEIVE_STEPS,
	RECEIVE_STEP,
	REMOVE_STEP
} from "../actions/step_actions";

const initialState = {
	1: {
		id: 1,
		title: "Buy Soap",
		todo_id: 1,
		done: false
	},
	2: {
		id: 2,
		title: "Wipe down car",
		todo_id: 1,
		done: false
	}
};

/*
const newSteps = [
	{ id: 1, title: "Buy Soap", todo_id: 1, done: true },
	{ id: 3, title: "Dry off car", todo_id: 1, done: false }
];
*/

const stepsReducer = (state = initialState, action) => {
	Object.freeze(state);
	let nextState = {};

	switch (action.type) {
		case RECEIVE_STEPS:
			action.steps.forEach((step) => {
				nextState[step.id] = step;
			});
			return nextState;
		case RECEIVE_STEP:
			const newStep = { [action.step.id]: action.step };
			return Object.assign({}, state, newStep);
		case REMOVE_STEP:
			nextState = Object.assign({}, state);
			delete nextState[action.step.id];
			return nextState;
		default:
			return state;
	}
};

export default stepsReducer;
