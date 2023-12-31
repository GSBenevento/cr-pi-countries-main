import axios from 'axios';
import {
	GET_COUNTRIES,
	GET_COUNTRY_BY_ID,
	FILTER_BY_CONTINENT,
	FILTER_BY_ACTIVITY,
	ORDER_COUNTRIES_BY_NAME,
	ORDER_COUNTRIES_BY_POPULATION,
	GET_COUNTRY_BY_NAME,
	GET_ACTIVITIES,
	RESET,
	DELETE_ACTIVITY,
	GET_ACTIVITY_BY_ID,
	UPDATE_ACTIVITY_SUCCESS,
	UPDATE_ACTIVITY_FAILURE,
} from './actionTypes';

const getCountries = () => {
	const endpoint = 'http://localhost:3001/countries';
	return async (dispatch) => {
		try {
			const { data } = await axios.get(endpoint);

			if (!data.length) throw Error('No hay paises');

			return dispatch({ type: GET_COUNTRIES, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

const getCountriesById = (id) => {
	const endpoint = 'http://localhost:3001/countries';
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`${endpoint}/${id}`);

			return dispatch({ type: GET_COUNTRY_BY_ID, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

const getCountryByName = (name) => {
	const endpoint = 'http://localhost:3001/countries';
	return async (dispatch) => {
		try {
			const { data } = await axios(`${endpoint}?name=${name}`);

			return dispatch({ type: GET_COUNTRY_BY_NAME, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

const filterByContinent = (continent) => {
	return {
		type: FILTER_BY_CONTINENT,
		payload: continent,
	};
};

const filterByActivity = (activity) => {
	return {
		type: FILTER_BY_ACTIVITY,
		payload: activity,
	};
};

const orderCountriesByName = (order) => {
	return {
		type: ORDER_COUNTRIES_BY_NAME,
		payload: order,
	};
};

const orderCountriesByPopulation = (order) => {
	return {
		type: ORDER_COUNTRIES_BY_POPULATION,
		payload: order,
	};
};

const getActivities = () => {
	const endpoint = 'http://localhost:3001/activities';
	return async (dispatch) => {
		try {
			const { data } = await axios.get(endpoint);

			return dispatch({ type: GET_ACTIVITIES, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

const addActivity = (activityData) => {
	const endpoint = 'http://localhost:3001/activities';
	return async () => {
		try {
			const { data } = await axios.post(endpoint, activityData);

			return data;
		} catch (error) {
			console.log(error.message);
		}
	};
};

const getActivitiesById = (id) => {
	const endpoint = 'http://localhost:3001/activities';
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`${endpoint}/${id}`);

			return dispatch({ type: GET_ACTIVITY_BY_ID, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

const deleteActivity = (id) => {
	const endpoint = 'http://localhost:3001/activities';
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(`${endpoint}/${id}`);

			return dispatch({ type: DELETE_ACTIVITY, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

const updateActivity = (id, FormData) => {
	const endpoint = 'http://localhost:3001/activities';
	return async (dispatch) => {
		try {
			const { data } = await axios.put(`${endpoint}/${id}`, FormData);

			dispatch({ type: UPDATE_ACTIVITY_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: UPDATE_ACTIVITY_FAILURE, payload: error.message });
		}
	};
};

const reset = () => {
	return {
		type: RESET,
	};
};

export {
	getCountries,
	getCountriesById,
	getCountryByName,
	filterByContinent,
	filterByActivity,
	orderCountriesByName,
	orderCountriesByPopulation,
	getActivities,
	addActivity,
	deleteActivity,
	getActivitiesById,
	updateActivity,
	reset,
};
