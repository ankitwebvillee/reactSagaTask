import { addData } from "./actionType";

export const selectedDataAction = (data) => {
	return {
		type: addData.ADD_DATA_INITIAED,
		payload: data,
	};
};