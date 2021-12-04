import { all } from 'redux-saga/effects';
import {contactSaga} from './contactSaga';
import conversationSaga from './conversationSaga';
import {messageSaga} from './messageSaga';
import { selectedDataSaga } from './selectedDataSaga';
import { socketSaga } from './socketSaga';

//watcherSaga
function* rootSaga() {
	yield all([contactSaga(), conversationSaga(), messageSaga(), socketSaga(), selectedDataSaga()]);
}

export default rootSaga;
