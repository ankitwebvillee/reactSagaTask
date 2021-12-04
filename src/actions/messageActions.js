import { messageApi, sendMessageApi, getMessageByIdApi } from './actionType';

export const messageAction = (payload) => {
	return {
		type: messageApi.messageInitiated,
		payload,
	};
};

export const sendMessageAction = (payload) => {
	return {
		type: sendMessageApi.sendMessageInitiated,
		payload,
	};
};

export const getMessageByIdAction = (payload) => {
	return {
		type: getMessageByIdApi.getMessageByIdInitiated,
		payload,
	};
};