import { takeLatest, put } from 'redux-saga/effects';
import { addData } from '../actions/actionType';


export function* SelectedDataWatcher({payload}) {
	try {
		yield put({ type: addData.ADD_DATA_SUCCESS, payload});
	} catch (error) {
		yield put({ type: addData.ADD_DATA_FAILED, error });
	}
}

function* selectedDataSaga() {
	yield takeLatest(addData.ADD_DATA_INITIAED, SelectedDataWatcher);
}

export { selectedDataSaga };
