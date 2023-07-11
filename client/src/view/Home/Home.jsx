import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCountries,
	filterByContinent,
	orderCountriesByName,
	orderCountriesByPopulation,
} from '../../redux/action';
import Paginado from '../../components/Paginado/Paginado';

const Home = () => {
	const dispatch = useDispatch();
	const countries = useSelector((state) => state.countries);
	const [currentPage, setCurrentPage] = useState(1);
	const [countriesForPage, setCountriesForPage] = useState(10);
	const start = (currentPage - 1) * countriesForPage;
	const end = start + countriesForPage;
	const pageElements = countries.slice(start, end);

	useEffect(() => {
		dispatch(getCountries());
	}, []);

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleFilterContinent = (event) => {
		event.preventDefault();
		dispatch(filterByContinent(event.target.value));
	};

	const handleOrderByName = (event) => {
		event.preventDefault();
		dispatch(orderCountriesByName(event.target.value));
	};

	const handleOrderByPopulation = (event) => {
		event.preventDefault();
		dispatch(orderCountriesByPopulation(event.target.value));
	};

	return (
		<>
			<select placeholder='Continent' onChange={handleFilterContinent}>
				<option value={'AllCountries'}>All Countries</option>
				<option value={'Africa'}>Africa</option>
				<option value={'Antarctica'}>Antarctica</option>
				<option value={'Asia'}>Asia</option>
				<option value={'Europe'}>Europe</option>
				<option value={'North America'}>North America</option>
				<option value={'Ocenia'}>Oceania</option>
				<option value={'South America'}>South America</option>
			</select>

			<select placeholder='OrderByName' onChange={handleOrderByName}>
				<option value={'AllCountries'}>Alphabetical order</option>
				<option value={'A'}>Ascending</option>
				<option value={'D'}>Descending</option>
			</select>

			<select
				placeholder='OrderByPopulation'
				onChange={handleOrderByPopulation}>
				<option value={'AllCountries'}>Population order</option>
				<option value={'A'}>Ascending</option>
				<option value={'D'}>Descending</option>
			</select>

			<Paginado
				countriesForPage={countriesForPage}
				countries={countries.length}
				paginado={paginado}
				currentPage={currentPage}
			/>
			<h1>Esta es la vista de Home</h1>

			<CardsContainer pageElements={pageElements} />
		</>
	);
};

export default Home;
