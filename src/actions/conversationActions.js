import { conversationApi, sendConversationApi, getConversationByIdApi } from './actionType';

export const conversationAction = (payload) => {
	return {
		type: conversationApi.conversationInitiated,
		payload,
	};
};

export const sendConversationAction = (payload) => {
	return {
		type: sendConversationApi.sendConversationInitiated,
		payload,
	};
};

export const getConversationAction = (payload) => {
	return {
		type: getConversationByIdApi.getConversationByIdInitiated,
		payload,
	};
};