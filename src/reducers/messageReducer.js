import { messageApi, sendMessageApi, getMessageByIdApi } from '../actions/actionType';

const initialState = {
	isLoading: false,
	messageData: [],
    sendMessageData: [], 
    getMessageData: []
};
const messageReducer = (state = initialState, action) => {
	if (action.type === messageApi.MESSAGE_SUCCESS || action.type === messageApi.MESSAGE_FAILED) {
		return {
			...state,
			messageData: action.response,
			isLoading: false,
		};
	} else if (action.type === messageApi.MESSAGE_INITIATED) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === sendMessageApi.SEND_MESSAGE_SUCCESS || action.type === sendMessageApi.SEND_MESSAGE_FAILED) {
		return {
			...state,
			sendMessageData: action.response,
			isLoading: false,
		};
	} else if (action.type === sendMessageApi.SEND_MESSAGE_INITIATED) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === getMessageByIdApi.GET_MESSAGE_BYID_INITIATED || action.type === getMessageByIdApi.GET_MESSAGE_BYID_FAILED) {
		return {
			...state,
			getMessageData: action.response,
			isLoading: false,
		};
	} else if (action.type === getMessageByIdApi.GET_MESSAGE_BYID_INITIATED) {
		return {
			...state,
			isLoading: true,
		};
	}  else {
		return state;
	}
};

export default messageReducer;

