import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { systemReducer, httpErrorHandlerReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const rootReducers = combineReducers({
    system: systemReducer,
    httpErrorHandler: httpErrorHandlerReducer
})

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore(initialState) {

	const store = createStore(rootReducers, initialState, compose(applyMiddleware(...middlewares)));

	sagaMiddleware.run(rootSaga);

	return store;
}