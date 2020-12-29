import axios from 'axios';
import API_URL from './apiurl';
import store from 'store'


axios.interceptors.request.use(function (config) {

	config.baseURL = API_URL.BASE_URL;

	config.timeout = 15000;

	const token = store.get('access_token');
	
  config.headers.Authorization =  token ? `Bearer ${token}` : '';

  return config;
});


axios.interceptors.response.use(function (response) {

	return response;
	
}, function (error) {

	if (!error.response) return Promise.reject({
		response: {
			status: 408,
			message: 'Request Timeout'
		}
	})

	return Promise.reject(error);
});


export const getUser = async (params) => {

	return axios.get(`${API_URL.GET_USER}`, { params: params })
		.then(data => data.data)
		.catch(error => { throw error.response });
};


export const searchNewReleases = async (params) => {

	return axios.get(`${API_URL.SEARCH_NEWRELEASES}`, { params: params })
		.then(data => data.data)
		.catch(error => { throw error.response });
};


export const searchPlaylists = async (params) => {

	return axios.get(`${API_URL.SEARCH_PLAYLISTS}`, { params: params })
		.then(data => data.data)
		.catch(error => { throw error.response });
};


export const searchCategories = async (params) => {

	return axios.get(`${API_URL.SEARCH_CATEGORIES}`, { params: params })
		.then(data => data.data)
		.catch(error => { throw error.response });
};