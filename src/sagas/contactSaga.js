import { message } from 'antd';
import axios from 'axios';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { contactApi } from '../actions/actionType';

export const contactService = async (request) => {
	const response = await axios.get(
		`${process.env.REACT_APP_API_BASEURL}/contacts`,
	);
	const data = response.data;
	return data;
};

export function* contactWatcher(payload) {
	try {
		const response = yield call(contactService, payload);
		yield put({ type: contactApi.contactSuccess, response });
	} catch (error) {
		message.info('error')
		yield put({ type: contactApi.contactFailed, error });
	}
}

function* contactSaga() {
	yield takeLatest(contactApi.contactInitiated, contactWatcher);
}

export { contactSaga };
