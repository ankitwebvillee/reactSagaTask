import { messageApi, sendMessageApi, getMessageByIdApi } from '../actions/actionType';

const initialState = {
	isLoading: false,
	messageData: [],
    sendMessageData: [], 
    getMessageData: []
};
const messageReducer = (state = initialState, action) => {
	if (action.type === messageApi.messageSuccess || action.type === messageApi.messageFailed) {
		return {
			...state,
			messageData: action.response,
			isLoading: false,
		};
	} else if (action.type === messageApi.messageInitiated) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === sendMessageApi.sendMessageSuccess || action.type === sendMessageApi.sendMessageFailed) {
		return {
			...state,
			sendMessageData: action.response,
			isLoading: false,
		};
	} else if (action.type === sendMessageApi.sendMessageInitiated) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === getMessageByIdApi.getMessageByIdInitiated || action.type === getMessageByIdApi.getMessageByIdFailed) {
		return {
			...state,
			getMessageData: action.response,
			isLoading: false,
		};
	} else if (action.type === getMessageByIdApi.getMessageByIdInitiated) {
		return {
			...state,
			isLoading: true,
		};
	}  else {
		return state;
	}
};

export default messageReducer;

