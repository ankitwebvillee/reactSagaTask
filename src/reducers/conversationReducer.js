import { conversationApi, sendConversationApi, getConversationByIdApi } from '../actions/actionType';

const initialState = {
	isLoading: false,
	conversationData: [],
	sendConversationData: [],
	getConversationByIdData: []
};
const conversationReducer = (state = initialState, action) => {
	if (action.type === conversationApi.CONVERSATION_SUCCESS || action.type === conversationApi.CONVERSATION_FAILED) {
		return {
			...state,
			conversationData: action.response,
			isLoading: false,
		};
	} else if(action.type === "NEW_MESSAGE" && state?.getConversationByIdData?.recent_messages){
		// append new messages in old recent messages array
			return {
				...state,
				getConversationByIdData: {
					...state.getConversationByIdData,
					recent_messages: [
						...state.getConversationByIdData?.recent_messages,
						action.payload,
					],
				},
		}
	} else if (action.type === conversationApi.CONVERSATION_INITIATED) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === sendConversationApi.SEND_CONVERSATION_SUCCESS || action.type === sendConversationApi.SEND_CONVERSATION_FAILED) {
		return {
			...state,
			sendConversationData: action.response,
			isLoading: false,
		};
	} else if (action.type === sendConversationApi.SEND_CONVERSATION_INITIATED) {
		return {
			...state,
			isLoading: true,
		};
	} else if (action.type === getConversationByIdApi.GET_CONVERSATION_BYID_SUCCESS || action.type === getConversationByIdApi.GET_CONVERSATION_BYID_FAILED) {
		return {
			...state,
			getConversationByIdData: action.response,
			isLoading: false,
		};
	} else if (action.type === getConversationByIdApi.GET_CONVERSATION_BYID_INITAITED) {
		return {
			...state,
			isLoading: true,
		};
	} else {
		return state;
	}
};

export default conversationReducer;

