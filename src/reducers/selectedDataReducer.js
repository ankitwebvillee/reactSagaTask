import { addData } from '../actions/actionType';

const initialState = {
	
};

const selectedDataReducer = (state = initialState, action) => {
	if (action.type === addData.ADD_DATA_SUCCESS) {
		return {
			...state,
			...action.payload
		};
	} else {
		return state;
	}
};

export default selectedDataReducer;
