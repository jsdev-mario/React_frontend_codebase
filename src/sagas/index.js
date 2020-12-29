import {all} from 'redux-saga/effects';
import authSagas from './auth';
import spotifySagas from './spotify';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        spotifySagas()
    ]);
}
