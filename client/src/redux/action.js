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

export {
	getCountries,
	getCountriesById,
	getCountryByName,
	filterByContinent,
	filterByActivity,
	orderCountriesByName,
	orderCountriesByPopulation,
	getActivities,
};
