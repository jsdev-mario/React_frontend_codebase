import {
	all,
	call,
	fork,
	put,
	takeEvery
} from 'redux-saga/effects';
import {
	GET_USER,
} from '../store/actionTypes';
import {
	updateUser,
	handleHTTPError,
} from '../store/actions';
import {
	getUser,
} from '../apis'


/** get user profile */
function* getUserSaga({ payload }) {
	try {
		const response = yield call(getUser, payload);
		yield put(updateUser(response));
	} catch (error) {
		console.log('get user profile', error);
		yield put(handleHTTPError(error));
	}
}

export function* getUserDetect() {
	yield takeEvery(GET_USER, getUserSaga);
}


export default function* rootSaga() {
	yield all([
		fork(getUserDetect),
	]);
}