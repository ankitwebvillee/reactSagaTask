import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware)),
	);
	sagaMiddleware.run(rootSaga);
	return store;
};

export default configureStore;
