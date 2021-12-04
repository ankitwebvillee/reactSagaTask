import { ADD_DATA } from '../actions/actionType';

const initialState = {
	selectedUser = null,
};
const selectedDataReducer = (state = initialState, action) => {
	if (action.type === ADD_DATA) {
		return {
            ...state,
			selectedUser: {
                ...state.selectedUser,
                ...action.response   
            },
		};
	} else {
		return state;
	}
};

export default selectedDataReducer;
