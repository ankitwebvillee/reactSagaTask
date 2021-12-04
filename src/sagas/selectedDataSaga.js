import { takeLatest, put } from 'redux-saga/effects';
import { ADD_DATA } from '../actions/actionType';


export function* SelectedDataWatcher(payload) {
	try {
		yield put({ type: ADD_DATA, payload });
	} catch (error) {
		yield put({ type: ADD_DATA, error });
	}
}

function* selectedDataSaga() {
	yield takeLatest(ADD_DATA, SelectedDataWatcher);
}

export { selectedDataSaga };
