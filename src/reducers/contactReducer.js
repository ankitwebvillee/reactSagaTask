import { contactApi } from '../actions/actionType';

const initialState = {
	isLoading: false,
	contactsData: [],
};
const contactReducer = (state = initialState, action) => {
	if (action.type === contactApi.contactSuccess || action.type === contactApi.contactFailed) {
		return {
			contactsData: action.response,
			isLoading: false,
		};
	} else if (action.type === contactApi.contactInitiated) {
		return {
			...state,
			isLoading: true,
		};
	} else {
		return state;
	}
};

export default contactReducer;
