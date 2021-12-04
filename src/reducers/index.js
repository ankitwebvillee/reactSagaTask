import { combineReducers } from 'redux';
import conversationReducer from './conversationReducer';
import contactReducer from './contactReducer';
import messageReducer from './messageReducer';
import socketReducer from './socketReducer';
import { selectedDataSaga } from '../sagas/selectedDataSaga';

const rootReducer = combineReducers({
	conversation: conversationReducer,
	contact: contactReducer,
	message: messageReducer,
	socket: socketReducer,
	selectedData: selectedDataSaga
});

export default rootReducer;
