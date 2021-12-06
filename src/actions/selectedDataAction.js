import { ADD_DATA } from "./actionType";

export const selectedDataAction = (data) => {
	return {
		type: ADD_DATA.addDataInitiate,
		payload: data,
	};
};