import {
	all,
	call,
	fork,
	put,
	takeEvery
} from 'redux-saga/effects';
import {
	SEARCH_NEWRELEASES,
	SEARCH_PLAYLISTS,
	SEARCH_CATEGORIES
} from '../store/actionTypes';
import {
	updateNewReleases,
	updatePlaylists,
	updateCategories,
	handleHTTPError,
} from '../store/actions';
import {
	searchNewReleases,
	searchPlaylists,
	searchCategories
} from '../apis'


/** search new releases */
function* searchNewReleasesSaga({ payload }) {
	try {
		const response = yield call(searchNewReleases, payload);
		console.log('new releases', response)
		yield put(updateNewReleases(response.albums.items));
	} catch (error) {
		console.log('search new releases', error);
		yield put(handleHTTPError(error));
	}
}

export function* searchReleasesDetect() {
	yield takeEvery(SEARCH_NEWRELEASES, searchNewReleasesSaga);
}


/** search feature playlists */
function* searchPlaylistsSaga({ payload }) {
	try {
		const response = yield call(searchPlaylists, payload);
		console.log('search feature playlists', response)
		yield put(updatePlaylists(response.playlists.items));
	} catch (error) {
		console.log('search feature playlists', error);
		yield put(handleHTTPError(error));
	}
}

export function* searchPlaylistsDetect() {
	yield takeEvery(SEARCH_PLAYLISTS, searchPlaylistsSaga);
}


/** search categories */
function* searchCategoriesSaga({ payload }) {
	try {
		const response = yield call(searchCategories, payload);
		console.log('search categories', response)
		yield put(updateCategories(response.categories.items));
	} catch (error) {
		console.log('search categories', error);
		yield put(handleHTTPError(error));
	}
}

export function* searchCategoriesDetect() {
	yield takeEvery(SEARCH_CATEGORIES, searchCategoriesSaga);
}



export default function* rootSaga() {
	yield all([
		fork(searchReleasesDetect),
		fork(searchPlaylistsDetect),
		fork(searchCategoriesDetect),
	]);
}