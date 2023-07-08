import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesById } from '../../redux/action';
import { useParams } from 'react-router-dom';

const Detail = () => {
	const dispatch = useDispatch();
	const country = useSelector((state) => state.countries);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getCountriesById(id));
	}, [id]);
	return (
		<>
			<img src={country?.image} />
			<h2>Name: {country?.name}</h2>
			<h2>Continenr: {country?.continent}</h2>
			<h2>Capital: {country?.capital}</h2>
			<h2>Subregion: {country?.subregion}</h2>
			<h2>Area: {country?.area}</h2>
			<h2>population: {country?.population}</h2>
		</>
	);
};

export default Detail;
