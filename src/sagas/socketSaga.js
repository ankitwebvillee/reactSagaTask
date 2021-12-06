import { takeLatest, call, put } from 'redux-saga/effects';
import { connectSocket } from '../actions/actionType';

export const socketService = async (request) => {

    const socket = new WebSocket('ws://34.122.252.114:3000/cable/')
    return socket;
};

export function* socketWatcher() {
    try {
        const response = yield call(socketService);
        yield put({ type: connectSocket.CONNECT_SOCKET_SUCCESS, response });
    } catch (error) {
        yield put({ type: connectSocket.CONNECT_SOCKET_FAILED, error });
    }
}

function* socketSaga() {
    yield takeLatest(connectSocket.CONNECT_SOCKET_INITIATE, socketWatcher);
}

export { socketSaga };
