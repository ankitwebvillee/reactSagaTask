import { takeLatest, put } from 'redux-saga/effects';
import { ADD_DATA } from '../actions/actionType';


export function* SelectedDataWatcher({payload}) {
	try {
		yield put({ type: ADD_DATA.addDataSuccess, payload});
	} catch (error) {
		yield put({ type: ADD_DATA.addDataFailed, error });
	}
}

function* selectedDataSaga() {
	yield takeLatest(ADD_DATA.addDataInitiate, SelectedDataWatcher);
}

export { selectedDataSaga };
