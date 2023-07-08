import { GET_COUNTRIES, GET_COUNTRY_BY_ID } from './actionTypes';

const initialState = { countries: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRIES:
			return { ...state, countries: action.payload };

		case GET_COUNTRY_BY_ID:
			return { ...state, countries: action.payload };
		default:
			return { ...state };
	}
};

export default reducer;
