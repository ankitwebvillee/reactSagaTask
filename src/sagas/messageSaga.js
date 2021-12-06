import { notification } from 'antd';
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getMessageByIdApi, messageApi, sendMessageApi } from '../actions/actionType';

export const messageService = async (request) => {
    const config = {
        headers: {
            user_id: request.payload.user_id,
			'Content-Type': 'application/json'
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
	const rawData = {
		content: request.payload.content,
	}
    const config = {
        headers: {
            user_id: request.payload.user_id,
			'Content-Type': 'application/json'
        }
    }
	const response = await axios.post(
		`${process.env.REACT_APP_API_BASEURL}/conversations/${request.payload.conversation_id}/messages`,
		JSON.stringify(rawData),
        config
	);
	const data = response.data;
	return data;
};

export const getMessageByIdService = async (request) => {
    const config = {
        headers: {
            user_id: request.payload.user_id,
			'Content-Type': 'application/json'
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
		yield put({ type: messageApi.MESSAGE_SUCCESS, response });
	} catch (error) {
		notification.warning({
            message: 'Internal Server Error',
            description:
                'Please try again after some time.',
        });
		yield put({ type: messageApi.MESSAGE_FAILED, error });
	}
}
export function* sendMessageWatcher(payload) {
	try {
		const response = yield call(sendMessageService, payload);
		yield put({ type: sendMessageApi.SEND_MESSAGE_SUCCESS, response });
	} catch (error) {
		notification.warning({
            message: 'Internal Server Error',
            description:
                'Please try again after some time.',
        });
		yield put({ type: sendMessageApi.SEND_MESSAGE_FAILED, error });
	}
}
export function* getMessageByIdWatcher(payload) {
	try {
		const response = yield call(getMessageByIdService, payload);
		yield put({ type: getMessageByIdApi.GET_MESSAGE_BYID_SUCCESS, response });
	} catch (error) {
		notification.warning({
            message: 'Internal Server Error',
            description:
                'Please try again after some time.',
        });
		yield put({ type: getMessageByIdApi.GET_MESSAGE_BYID_FAILED, error });
	}
}

function* messageSaga() {
	yield takeLatest(messageApi.MESSAGE_INITIATED, messageWatcher);
	yield takeLatest(sendMessageApi.SEND_MESSAGE_INITIATED, sendMessageWatcher);
	yield takeLatest(getMessageByIdApi.GET_MESSAGE_BYID_INITIATED, getMessageByIdWatcher);
}

export { messageSaga };
