import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesById, getActivities } from '../../redux/action';
import { useParams } from 'react-router-dom';
import ActivitiesContainerForDetail from '../../components/ActivitiesContainerForDetail/ActivitiesContainerForDetail';
import style from './Detail.module.css';

const Detail = () => {
	const dispatch = useDispatch();
	const country = useSelector((state) => state.detail);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getCountriesById(id));
		dispatch(getActivities());
	}, []);
	return (
		<div className={style.parent}>
			<div className={style.div1}>
				<img src={country?.image} className={style.img} />
			</div>
			<div className={style.div2}>
				<div className={style.info}>
					<h2>Name: {country?.name}</h2>
					<h2>Continent: {country?.continent}</h2>
					<h2>Capital: {country?.capital}</h2>
					<h2>Subregion: {country?.subregion}</h2>
					<h2>Area: {country?.area}</h2>
					<h2>population: {country?.population}</h2>
				</div>
			</div>
			<div className={style.div3}>
				<ActivitiesContainerForDetail activities={country.Activities} />
			</div>
		</div>
	);
};

export default Detail;
