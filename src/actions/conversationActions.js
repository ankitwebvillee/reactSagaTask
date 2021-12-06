import { conversationApi, sendConversationApi, getConversationByIdApi } from './actionType';

export const conversationAction = (payload) => {
	return {
		type: conversationApi.CONVERSATION_INITIATED,
		payload,
	};
};

export const sendConversationAction = (payload) => {
	return {
		type: sendConversationApi.SEND_CONVERSATION_INITIATED,
		payload,
	};
};

export const getConversationAction = (payload) => {
	return {
		type: getConversationByIdApi.GET_CONVERSATION_BYID_INITAITED,
		payload,
	};
};