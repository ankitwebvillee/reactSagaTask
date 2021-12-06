import { connectSocket } from "../actions/actionType";

const initialState = {
	socket: null
};

const socketReducer = (state = initialState, action) => {
	if (action.type === connectSocket.CONNECT_SOCKET_INITIATE) {
		return {
			...state,
            socket: action.response
		};
	}  else {
		return state;
	}
};

export default socketReducer;