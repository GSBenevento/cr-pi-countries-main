import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteActivity, getActivitiesById } from '../../redux/action';
import { useParams } from 'react-router-dom';

const DetailActivities = () => {
	const dispatch = useDispatch();
	const activity = useSelector((state) => state.detailActivity);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getActivitiesById(id));
		console.log(activity);
	}, []);

	const handleDelete = () => {
		dispatch(deleteActivity(activity.id));
	};

	return (
		<div>
			<h3>Activity: {activity.name}</h3>
			<h3>Difficulty: {activity.difficulty}</h3>
			<h3>Duration (in hours): {activity.duration}</h3>
			<h3>Season: {activity.season}</h3>
			<h3>Coutries: </h3>
			<ul>
				{activity &&
					activity.Countries &&
					activity.Countries.map((country) => (
						<span key={country.name}>
							{country.name},
							<br />
						</span>
					))}
			</ul>
			<button onClick={handleDelete}>Eliminar actividad</button>
		</div>
	);
};

export default DetailActivities;
