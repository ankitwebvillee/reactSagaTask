import { combineReducers } from 'redux';
import conversationReducer from './conversationReducer';
import contactReducer from './contactReducer';
import messageReducer from './messageReducer';
import socketReducer from './socketReducer';
import selectedDataReducer from './selectedDataReducer';

const rootReducer = combineReducers({
	conversation: conversationReducer,
	contact: contactReducer,
	message: messageReducer,
	socket: socketReducer,
	selectedData: selectedDataReducer,
});

export default rootReducer;
