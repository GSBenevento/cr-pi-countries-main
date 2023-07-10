import axios from 'axios';
import {
	GET_COUNTRIES,
	GET_COUNTRY_BY_ID,
	FILTER_BY_CONTINENT,
	ORDER_COUNTRIES,
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

const filterByContinent = (continent) => {
	return {
		type: FILTER_BY_CONTINENT,
		payload: continent,
	};
};

const orderCountries = (order) => {
	return {
		type: ORDER_COUNTRIES,
		payload: order,
	};
};

export { getCountries, getCountriesById, filterByContinent, orderCountries };
