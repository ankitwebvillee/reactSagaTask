import { notification } from 'antd';
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { conversationApi, sendConversationApi, getConversationByIdApi } from '../actions/actionType';

export const conversationService = async (request) => {
    const config = {
        headers: {
            user_id: request.payload.user_id,
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}/conversations`,
        config
    );
    const data = response.data;
    return data;
};

export const sendConversationService = async (request) => {
    const rawData = {
        title: request.payload.title,
        contact_ids: request.payload.contact_ids
    }
    const config = {
        headers: {
            'user_id': request.payload.user_id,
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}/conversations`,
        JSON.stringify(rawData),
        config
    );
    request.payload.navigate('/conversation')
    const data = response.data;
    return data;
};

export const getConversationByIdService = async (request) => {
    const config = {
        headers: {
            user_id: request.payload.user_id,
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}/conversations/${request.payload.conversationId}`,
        config
    );
    const data = response.data;
    return data;
};

export function* conversationWatcher(payload) {
    try {
        const response = yield call(conversationService, payload);
        yield put({ type: conversationApi.conversationSuccess, response });
    } catch (error) {
        notification.warning({
            message: 'Internal Server Error',
            description:
                'Please try again after some time.',
        });
        yield put({ type: conversationApi.conversationFailed, error });
    }
}
export function* sendConversationWatcher(payload) {
    try {
        const response = yield call(sendConversationService, payload);
        yield put({ type: sendConversationApi.sendConversationSuccess, response });
    } catch (error) {
        notification.warning({
            message: 'Internal Server Error',
            description:
                'Please try again after some time.',
        });
        yield put({ type: sendConversationApi.sendConversationFailed, error });
    }
}
export function* getConversationByIdWatcher(payload) {
    try {
        const response = yield call(getConversationByIdService, payload);
        yield put({ type: getConversationByIdApi.getConversationByIdSuccess, response });
    } catch (error) {
        notification.warning({
            message: 'Internal Server Error',
            description:
                'Please try again after some time.',
        });
        yield put({ type: getConversationByIdApi.getConversationByIdFailed, error });
    }
}

function* conversationSaga() {
    yield takeLatest(conversationApi.conversationInitiated, conversationWatcher);
    yield takeLatest(sendConversationApi.sendConversationInitiated, sendConversationWatcher);
    yield takeLatest(getConversationByIdApi.getConversationByIdInitiated, getConversationByIdWatcher);
}

export default conversationSaga;
