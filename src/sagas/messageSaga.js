import { message } from 'antd';
import axios from 'axios';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { getMessageByIdApi, messageApi, sendMessageApi } from '../actions/actionType';

export const messageService = async (request) => {
    const config = {
        headers: {
            user_id: request.payload.user_id,
        }
    }
	const response = await axios.get(
		`${process.env.REACT_APP_API_BASEURL}/conversations/${request.payload.conversation_id}/messages`,
        config
	);
	const data = response.data;
	return data;
};

export const sendMessageService = async (request) => {
    const config = {
        headers: {
            user_id: request.payload.user_id,
        }
    }
	const response = await axios.post(
		`${process.env.REACT_APP_API_BASEURL}/conversations/${request.payload.conversation_id}/messages`,
        config
	);
	const data = response.data;
	return data;
};

export const getMessageByIdService = async (request) => {
    const config = {
        headers: {
            user_id: request.payload.user_id,
        }
    }
	const response = await axios.get(
		`${process.env.REACT_APP_API_BASEURL}/conversations/${request.payload.conversation_id}/messages/${request.payload.message_id}`,
        config
	);
	const data = response.data;
	return data;
};

export function* messageWatcher(payload) {
	try {
		const response = yield call(messageService, payload);
		yield put({ type: messageApi.messageSuccess, response });
	} catch (error) {
		message.info('error')
		yield put({ type: messageApi.messageFailed, error });
	}
}
export function* sendMessageWatcher(payload) {
	try {
		const response = yield call(sendMessageService, payload);
		yield put({ type: sendMessageApi.sendMessageSuccess, response });
	} catch (error) {
		message.info('error')
		yield put({ type: sendMessageApi.sendMessageFailed, error });
	}
}
export function* getMessageByIdWatcher(payload) {
	try {
		const response = yield call(getMessageByIdService, payload);
		yield put({ type: getMessageByIdApi.getMessageByIdSuccess, response });
	} catch (error) {
		message.info('error')
		yield put({ type: getMessageByIdApi.getMessageByIdFailed, error });
	}
}

function* messageSaga() {
	yield takeLatest(messageApi.messageInitiated, messageWatcher);
	yield takeLatest(sendMessageApi.sendMessageInitiated, sendMessageWatcher);
	yield takeLatest(getMessageByIdApi.getMessageByIdInitiated, getMessageByIdWatcher);
}

export { messageSaga };