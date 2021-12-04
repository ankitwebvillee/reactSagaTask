import { ADD_DATA } from "./actionType";

export const selectedDataAction = (payload) => {
	return {
		type: ADD_DATA,
		payload,
	};
};