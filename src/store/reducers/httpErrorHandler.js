import {
	HTTP_401_ERROR,
	HTTP_404_ERROR,
	HTTP_500_ERROR,
	HTTP_OTHER_ERROR
} from '../actionTypes';
import store from 'store'


const INIT_STATE = {
	showErrorModal: false,
	errorMessage: ''
};


const excute401ErrorHandler = (state, action) => {

	store.clearAll();

	window.location.href = "/signin"

	return { ...state };
}


const excute404ErrorHandler = (state, action) => {

	return {
		...state,
		showErrorModal: true,
		errorMessage: '404 error. Wrong request.'
	}
}


const excute500ErrorHandler = (state, action) => {

	return {
		...state,
		showErrorModal: true,
		errorMessage: 'Sorry, There was a temporary problem with the server. Please try again.'
	}
}


const excuteOtherErrorHandler = (state, action) => {

	return {
		...state,
		showErrorModal: true,
		errorMessage: action.error.message
	}
}



export const httpErrorHandlerReducer = (state = INIT_STATE, action) => {

	switch (action.type) {

		case HTTP_401_ERROR:

			return excute401ErrorHandler(state, action)

		case HTTP_404_ERROR:

			return excute404ErrorHandler(state, action)

		case HTTP_500_ERROR:

			return excute500ErrorHandler(state, action)

		case HTTP_OTHER_ERROR:

			return excuteOtherErrorHandler(state, action)

		default:

			return state;
	}
}