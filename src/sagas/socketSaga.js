import { takeLatest, call, put } from 'redux-saga/effects';
import { CONNECT_SOCKET } from '../actions/actionType';

export const socketService = async (request) => {

    const socket = new WebSocket('ws://34.122.252.114:3000/cable/')
    return socket;
};

export function* socketWatcher() {
    try {
        const response = yield call(socketService);
        yield put({ type: CONNECT_SOCKET, response });
    } catch (error) {
        yield put({ type: CONNECT_SOCKET, error });
    }
}

function* socketSaga() {
    yield takeLatest(CONNECT_SOCKET, socketWatcher);
}

export { socketSaga };
