import { CONNECT_SOCKET } from "../actions/actionType";

const initialState = {
	socket: null
};

const socketReducer = (state = initialState, action) => {
	if (action.type === CONNECT_SOCKET) {
		return {
			...state,
            socket: action.response
		};
	}  else {
		return state;
	}
};

export default socketReducer;