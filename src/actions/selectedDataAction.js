import { ADD_DATA } from "./actionType";

export const selectedDataAction = (data) => {
	return {
		type: ADD_DATA.ADD_DATA_INITIAED,
		payload: data,
	};
};