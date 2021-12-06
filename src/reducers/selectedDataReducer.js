import { ADD_DATA } from '../actions/actionType';

const initialState = {
	
};

const selectedDataReducer = (state = initialState, action) => {
	if (action.type === ADD_DATA.ADD_DATA_SUCCESS) {
		return {
			...state,
			...action.payload
		};
	} else {
		return state;
	}
};

export default selectedDataReducer;
