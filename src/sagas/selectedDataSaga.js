import { takeLatest, put } from 'redux-saga/effects';
import { ADD_DATA } from '../actions/actionType';


export function* SelectedDataWatcher({payload}) {
	try {
		yield put({ type: ADD_DATA.ADD_DATA_SUCCESS, payload});
	} catch (error) {
		yield put({ type: ADD_DATA.ADD_DATA_FAILED, error });
	}
}

function* selectedDataSaga() {
	yield takeLatest(ADD_DATA.ADD_DATA_INITIAED, SelectedDataWatcher);
}

export { selectedDataSaga };
