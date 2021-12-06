import { message } from 'antd';
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { contactApi } from '../actions/actionType';

export const contactService = async (request) => {
	const response = await axios.get(
		`${process.env.REACT_APP_API_BASEURL}/contacts`,
	);
	const data = response.data;
	return data;
};

export function* contactWatcher(payload) {
	console.log(payload, 'contactwatcher')
	try {
		const response = yield call(contactService, payload);
		yield put({ type: contactApi.CONTACT_SUCCESS, response });
	} catch (error) {
		message.info('error')
		yield put({ type: contactApi.CONTACT_FAILED, error });
	}
}

function* contactSaga() {
	yield takeLatest(contactApi.CONTACT_INITIATED, contactWatcher);
}

export { contactSaga };
