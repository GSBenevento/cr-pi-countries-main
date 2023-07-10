import {
	GET_COUNTRIES,
	GET_COUNTRY_BY_ID,
	FILTER_BY_CONTINENT,
	ORDER_COUNTRIES,
} from './actionTypes';

const initialState = { countries: [], allCountries: [], detail: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: action.payload,
				allCountries: action.payload,
			};

		case GET_COUNTRY_BY_ID:
			return { ...state, detail: action.payload };

		case FILTER_BY_CONTINENT:
			const allCountries = [...state.allCountries];
			const countriesByContinent =
				action.payload === 'AllCountries'
					? allCountries
					: allCountries.filter(
							(country) => country.continent === action.payload
					  );
			return {
				...state,
				countries: countriesByContinent,
			};
		case ORDER_COUNTRIES:
			const allCountriesCopy = [...state.allCountries];
			return {
				...state,
				countries:
					action.payload === 'AllCountries'
						? allCountriesCopy
						: action.payload === 'A'
						? allCountriesCopy.sort((a, b) => a.id.localeCompare(b.id))
						: allCountriesCopy.sort((a, b) => b.id.localeCompare(a.id)),
				//Al utilizar localeCompare(), te aseguras de que las cadenas de texto
				//se comparen correctamente en función del orden alfabético.
			};
		default:
			return { ...state };
	}
};

export default reducer;
