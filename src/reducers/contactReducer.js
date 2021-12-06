import { contactApi } from '../actions/actionType';

const initialState = {
	isLoading: false,
	contactsData: [],
};
const contactReducer = (state = initialState, action) => {
	if (action.type === contactApi.CONTACT_SUCCESS || action.type === contactApi.CONTACT_FAILED) {
		return {
			contactsData: action.response,
			isLoading: false,
		};
	} else if (action.type === contactApi.CONTACT_INITIATED) {
		return {
			...state,
			isLoading: true,
		};
	} else {
		return state;
	}
};

export default contactReducer;
