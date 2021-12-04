import { combineReducers } from 'redux';
import conversationReducer from './conversationReducer';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
	conversation: conversationReducer,
	contact: contactReducer,
});

export default rootReducer;
