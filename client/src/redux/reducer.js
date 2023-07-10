import {
	GET_COUNTRIES,
	GET_COUNTRY_BY_ID,
	FILTER_BY_CONTINENT,
	ORDER_COUNTRIES_BY_NAME,
	ORDER_COUNTRIES_BY_POPULATION,
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
		case ORDER_COUNTRIES_BY_NAME:
			const allCountriesCopyByName = [...state.allCountries];
			return {
				...state,
				countries:
					action.payload === 'AllCountries'
						? allCountriesCopyByName
						: action.payload === 'A'
						? allCountriesCopyByName.sort((a, b) =>
								a.name.localeCompare(b.name)
						  )
						: allCountriesCopyByName.sort((a, b) =>
								b.name.localeCompare(a.name)
						  ),
				//Al utilizar localeCompare(), te aseguras de que las cadenas de texto
				//se comparen correctamente en función del orden alfabético.
			};
		case ORDER_COUNTRIES_BY_POPULATION:
			const allCountriesCopyByPopulation = [...state.allCountries];
			return {
				...state,
				countries:
					action.payload === 'AllCountries'
						? allCountriesCopyByPopulation
						: action.payload == 'A'
						? allCountriesCopyByPopulation.sort(
								(a, b) => a.population - b.population
						  )
						: allCountriesCopyByPopulation.sort(
								(a, b) => b.population - a.population
						  ),
			};
		default:
			return { ...state };
	}
};

export default reducer;
