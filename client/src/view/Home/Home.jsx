import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/action';

const Home = () => {
	const dispatch = useDispatch();
	const countries = useSelector((state) => state.countries);

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch]);

	return (
		<>
			<h1>Esta es la vista de Home</h1>
			<CardsContainer countries={countries} />
		</>
	);
};

export default Home;
