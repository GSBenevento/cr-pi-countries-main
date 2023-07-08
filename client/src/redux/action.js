import axios from 'axios';
import { GET_COUNTRIES, GET_COUNTRY_BY_ID } from './actionTypes';

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

export { getCountries, getCountriesById };
