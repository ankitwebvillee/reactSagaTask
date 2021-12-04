import { conversationApi, sendConversationApi, getConversationByIdApi } from '../actions/actionType';

const initialState = {
	isLoading: false,
	conversationData: [],
	sendConversationData: [],
	getConversationByIdData: []
};
const conversationReducer = (state = initialState, action) => {
	if (action.type === conversationApi.conversationSuccess || action.type === conversationApi.conversationFailed) {
		return {
			...state,
			conversationData: action.response,
			isLoading: false,
		};
	} else if (action.type === conversationApi.conversationInitiated) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === sendConversationApi.sendConversationSuccess || action.type === sendConversationApi.sendConversationFailed) {
		return {
			...state,
			sendConversationData: action.response,
			isLoading: false,
		};
	} else if (action.type === sendConversationApi.sendConversationInitiated) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === getConversationByIdApi.getConversationByIdSuccess || action.type === getConversationByIdApi.getConversationByIdFailed) {
		return {
			...state,
			getConversationByIdData: action.response,
			isLoading: false,
		};
	} else if (action.type === getConversationByIdApi.getConversationByIdInitiated) {
		return {
			...state,
			isLoading: true,
		};
	} else {
		return state;
	}
};

export default conversationReducer;

