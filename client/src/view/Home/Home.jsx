import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCountries,
	filterByContinent,
	orderCountries,
} from '../../redux/action';

const Home = () => {
	const dispatch = useDispatch();
	const countries = useSelector((state) => state.countries);

	useEffect(() => {
		dispatch(getCountries());
	}, []);

	const handleFilterContinent = (event) => {
		event.preventDefault();
		dispatch(filterByContinent(event.target.value));
	};

	const handleOrder = (event) => {
		event.preventDefault();
		dispatch(orderCountries(event.target.value));
	};

	return (
		<>
			<select placeholder='Continent' onChange={handleFilterContinent}>
				<option value={'AllCountries'}>All Countries</option>
				<option value={'Africa'}>Africa</option>
				<option value={'Asia'}>Asia</option>
				<option value={'Europe'}>Europe</option>
				<option value={'North America'}>North America</option>
				<option value={'Ocenia'}>Oceania</option>
				<option value={'South America'}>South America</option>
			</select>

			<select placeholder='Order' onChange={handleOrder}>
				<option value={'AllCountries'}>Disorderly</option>
				<option value={'A'}>Ascending</option>
				<option value={'D'}>Descending</option>
			</select>

			<h1>Esta es la vista de Home</h1>

			<CardsContainer countries={countries} />
		</>
	);
};

export default Home;
