import {
	GET_USER,
	UPDATE_USER,
	USER_LOGOUT,
	SEARCH_NEWRELEASES,
	UPDATE_NEWRELEASES,
	SEARCH_PLAYLISTS,
	UPDATE_PLAYLISTS,
	SEARCH_CATEGORIES,
	UPDATE_CATEGORIES,
	TOGGLE_THEME
} from '../actionTypes';

/** user actions */
export const getUser = () => {

	return {
		type: GET_USER,
	};
}

export const updateUser = (data) => {

	return {
		type: UPDATE_USER,
		payload: data
	};
}

export const userLogout = () => {

	return {
		type: USER_LOGOUT,
	};
}


/** new releases actions */
export const searchNewReleases = () => {

	return {
		type: SEARCH_NEWRELEASES,
	};
}

export const updateNewReleases = (data) => {

	return {
		type: UPDATE_NEWRELEASES,
		payload: data
	};
}


/** feature playlists actions */
export const searchPlaylists = () => {

	return {
		type: SEARCH_PLAYLISTS,
	};
}

export const updatePlaylists = (data) => {

	return {
		type: UPDATE_PLAYLISTS,
		payload: data
	};
}


/** categories actions */
export const searchCategories = () => {

	return {
		type: SEARCH_CATEGORIES,
	};
}

export const updateCategories = (data) => {

	return {
		type: UPDATE_CATEGORIES,
		payload: data
	};
}


/** theme */
export const toggleTheme = () => {

	return {
		type: TOGGLE_THEME
	};
}