import {
	GET_COUNTRIES,
	GET_COUNTRY_BY_ID,
	GET_COUNTRY_BY_NAME,
	FILTER_BY_CONTINENT,
	FILTER_BY_ACTIVITY,
	ORDER_COUNTRIES_BY_NAME,
	ORDER_COUNTRIES_BY_POPULATION,
	GET_ACTIVITIES,
	ADD_ACTIVITY,
} from './actionTypes';

const initialState = {
	countries: [],
	allCountries: [],
	detail: [],
	activities: [],
	allActivities: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: action.payload,
				allCountries: action.payload,
			};

		case GET_COUNTRY_BY_ID:
			return {
				...state,
				detail: action.payload,
			};

		case GET_COUNTRY_BY_NAME:
			return {
				...state,
				countries: action.payload,
			};

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
		case FILTER_BY_ACTIVITY:
			const allCountriesCopy = [...state.allCountries];
			console.log('allCountriesCopy:', allCountriesCopy);
			console.log('action.payload:', action.payload);
			const countriesByActivities =
				action.payload === 'Activities'
					? allCountriesCopy
					: action.payload === 'allActivities'
					? allCountriesCopy.filter((country) => country.Activities.length > 0)
					: allCountriesCopy.filter((country) =>
							country.Activities.some(
								(activity) => activity.name === action.payload
							)
					  );

			console.log('countriesByActivities:', countriesByActivities);

			return {
				...state,
				countries: countriesByActivities,
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
		case GET_ACTIVITIES:
			return {
				...state,
				activities: action.payload,
				allActivities: action.payload,
			};
		case ADD_ACTIVITY:
			return {
				...state,
			};
		default:
			return { ...state };
	}
};

export default reducer;
