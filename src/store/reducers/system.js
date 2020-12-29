import {
	TOGGLE_THEME,
	UPDATE_CATEGORIES,
	UPDATE_NEWRELEASES,
	UPDATE_PLAYLISTS,
	UPDATE_USER, 
	USER_LOGOUT
} from '../actionTypes';
import store from 'store'

const INIT_STATE = {
	user: store.get('user'),
	newReleases: null,
	playlists: null,
	categories: null,
	themeMode: store.get('theme_mode') || 'dark'
};

export const systemReducer = (state = INIT_STATE, action) => {

	switch (action.type) {

		case UPDATE_USER:
			
			store.set('user', action.payload)

			return { ...state, user: action.payload };

		case USER_LOGOUT:

			store.remove('user')

			store.remove('access_token')

			return { ...state, user: null };

		case UPDATE_NEWRELEASES:

			return { ...state, newReleases: action.payload };

		case UPDATE_PLAYLISTS:
			
			return { ...state, playlists: action.payload };

		case UPDATE_CATEGORIES:

			return { ...state, categories: action.payload };

		case TOGGLE_THEME:

			const themeMode = state.themeMode === 'light' ? 'dark' : 'light'
			store.set('theme_mode', themeMode)
			return { ...state, themeMode };

		default:

			return state;
	}
}