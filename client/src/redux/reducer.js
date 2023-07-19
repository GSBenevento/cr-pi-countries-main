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
	DELETE_ACTIVITY,
	GET_ACTIVITY_BY_ID,
	UPDATE_ACTIVITY_SUCCESS,
	UPDATE_ACTIVITY_FAILURE,
	RESET,
} from './actionTypes';

const initialState = {
	countries: [],
	allCountries: [],
	detail: [],
	activities: [],
	allActivities: [],
	detailActivity: [],
	error: null,
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
			const allCountries1 = [...state.countries];
			const allCountries2 = [...state.allCountries];
			const countriesByContinent =
				action.payload === 'AllCountries'
					? allCountries2
					: allCountries1.filter(
							(country) => country.continent === action.payload
					  );
			return {
				...state,
				countries: countriesByContinent,
			};

		case FILTER_BY_ACTIVITY:
			const allCountriesCopy1 = [...state.countries];
			const allCountriesCopy2 = [...state.allCountries];

			const countriesByActivities =
				action.payload === 'Activities'
					? allCountriesCopy2
					: action.payload === 'allActivities'
					? allCountriesCopy1.filter((country) => country.Activities.length > 0)
					: allCountriesCopy1.filter((country) =>
							country.Activities.some(
								(activity) => activity.name === action.payload
							)
					  );

			return {
				...state,
				countries: countriesByActivities,
			};

		case ORDER_COUNTRIES_BY_NAME:
			const allCountriesCopyByName1 = [...state.allCountries];
			const allCountriesCopyByName2 = [...state.countries];
			return {
				...state,
				countries:
					action.payload === 'AllCountries'
						? allCountriesCopyByName1
						: action.payload === 'A'
						? allCountriesCopyByName2.sort((a, b) =>
								a.name.localeCompare(b.name)
						  )
						: allCountriesCopyByName2.sort((a, b) =>
								b.name.localeCompare(a.name)
						  ),
				//Al utilizar localeCompare(), te aseguras de que las cadenas de texto
				//se comparen correctamente en función del orden alfabético.
			};

		case ORDER_COUNTRIES_BY_POPULATION:
			const allCountriesCopyByPopulation1 = [...state.allCountries];
			const allCountriesCopyByPopulation2 = [...state.countries];
			return {
				...state,
				countries:
					action.payload === 'AllCountries'
						? allCountriesCopyByPopulation1
						: action.payload == 'A'
						? allCountriesCopyByPopulation2.sort(
								(a, b) => a.population - b.population
						  )
						: allCountriesCopyByPopulation2.sort(
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

		case DELETE_ACTIVITY:
			return {
				...state,
				activities: state.activities.filter(
					(activity) => activity.id !== action.payload
				),
			};

		case GET_ACTIVITY_BY_ID:
			return {
				...state,
				detailActivity: action.payload,
			};

		case UPDATE_ACTIVITY_SUCCESS:
			const updateActivity = state.activities.map((activity) => {
				if (activity.id === action.payload.id) {
					return action.payload;
				}
				return activity;
			});
			return {
				...state,
				activities: updateActivity,
				error: null,
			};

		case UPDATE_ACTIVITY_FAILURE:
			return { ...state, error: action.payload };

		case RESET:
			return {
				...state,
				countries: [...state.allCountries],
			};

		default:
			return { ...state };
	}
};

export default reducer;
