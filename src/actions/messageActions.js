import { messageApi, sendMessageApi, getMessageByIdApi } from './actionType';

export const messageAction = (payload) => {
	return {
		type: messageApi.MESSAGE_INITIATED,
		payload,
	};
};

export const sendMessageAction = (payload) => {
	return {
		type: sendMessageApi.SEND_MESSAGE_INITIATED,
		payload,
	};
};

export const getMessageByIdAction = (payload) => {
	return {
		type: getMessageByIdApi.GET_MESSAGE_BYID_INITIATED,
		payload,
	};
};