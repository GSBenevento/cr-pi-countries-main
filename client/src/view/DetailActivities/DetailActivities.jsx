import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteActivity,
	getActivitiesById,
	updateActivity,
} from '../../redux/action';
import { useNavigate, useParams } from 'react-router-dom';
import style from './DetailActivities.module.css';

const DetailActivities = () => {
	const dispatch = useDispatch();
	const activity = useSelector((state) => state.detailActivity);
	const { id } = useParams();
	const navigate = useNavigate();
	const [checkedDifficulty, setCheckedDifficulty] = useState('');
	const [checkedSeason, setCheckedSeason] = useState('');
	const [errors, setErrors] = useState({});

	useEffect(() => {
		dispatch(getActivitiesById(id));
	}, []);

	const [formData, setFormData] = useState({
		name: '',
		difficulty: '',
		duration: '',
		season: '',
	});

	const handleDelete = () => {
		dispatch(deleteActivity(activity.id));
		navigate('/form');
		alert('Deleted activity');
	};

	const validate = (data) => {
		let errors = {};
		const durationRegex = /^(?:[1-9]|1\d|2[0-3])$/;

		if (!durationRegex.test(data.duration)) {
			errors.duration = 'It has to be a number from 1 to 23';
		}

		return errors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		await dispatch(updateActivity(id, formData));
		setFormData({
			name: '',
			difficulty: '',
			duration: '',
			season: '',
		});
		alert('Updated activity');
		dispatch(getActivitiesById(id));
	};

	const handleSelectActivity = (event) => {
		setFormData({
			...formData,
			name: event.target.value,
		});
	};

	const handleCheckSeason = (event) => {
		const value = event.target.value;
		if (event.target.checked) {
			setCheckedSeason(value);
			setFormData({
				...formData,
				season: value,
			});
		} else {
			setCheckedSeason('');
			setFormData({
				...formData,
				season: '',
			});
		}
	};

	const handleCheckDifficulty = (event) => {
		const value = event.target.value;
		if (event.target.checked) {
			setCheckedDifficulty(value);
			setFormData({
				...formData,
				difficulty: value,
			});
		} else {
			setCheckedDifficulty('');
			setFormData({
				...formData,
				difficulty: '',
			});
		}
	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
		setErrors(
			validate({
				...formData,
				[event.target.name]: event.target.value,
			})
		);
	};

	return (
		<div className={style.parent}>
			<div className={style.info}>
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
				<button onClick={handleDelete}>delete activity</button>
			</div>

			<div className={style.formPosition}>
				<form onSubmit={handleSubmit} className={style.form}>
					<h1>Update your activity</h1>
					<div>
						<label htmlFor='name'>Activity: </label>
						<select onChange={handleSelectActivity}>
							{[
								'Sightseeing',
								'Swimming',
								'Hiking',
								'Exploring',
								'Visiting monuments',
								'Trying local cuisine',
								'Taking photographs',
								'Shopping',
								'Relaxing on the beach',
								'Enjoying nature',
								'Doing water sports',
								'Visiting museums',
								'Exploring local markets',
								'Wildlife watching',
								'Participating in cultural festivals',
								'Engaging in historical tourism',
								'Practicing outdoor sports',
								'Having a picnic',
								'Visiting theme parks',
								'Exploring the nightlife',
							].map((activity) => (
								<option key={activity} value={activity}>
									{activity}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor='difficulty'>Difficulty: </label>
						{[1, 2, 3, 4, 5].map((level) => (
							<label key={level}>
								<input
									type='checkbox'
									value={level}
									checked={checkedDifficulty === level.toString()}
									onChange={handleCheckDifficulty}
								/>
								{level}
							</label>
						))}
					</div>
					<div>
						<label htmlFor='season'>Season: </label>
						{['spring', 'summer', 'autumn', 'winter'].map((level) => (
							<label key={level}>
								<input
									type='checkbox'
									value={level}
									checked={checkedSeason === level}
									onChange={handleCheckSeason}
								/>
								{level}
							</label>
						))}
					</div>
					<div>
						<label htmlFor='duration'>Duration (in hours): </label>
						<input
							type='number'
							id='duration'
							name='duration'
							onChange={handleChange}
						/>
						{errors.duration && <p className='error'>{errors.duration}</p>}
					</div>

					<button type='submit'>Update</button>
				</form>
			</div>
		</div>
	);
};

export default DetailActivities;
