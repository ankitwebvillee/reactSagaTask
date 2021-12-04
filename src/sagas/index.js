import { all, call, takeEvery, take } from 'redux-saga/effects';
import {contactSaga} from './contactSaga';
import conversationSaga from './conversationSaga';
import {messageSaga} from './messageSaga';

//watcherSaga
function* rootSaga() {
	yield all([contactSaga(), conversationSaga(), messageSaga()]);
}

export default rootSaga;
