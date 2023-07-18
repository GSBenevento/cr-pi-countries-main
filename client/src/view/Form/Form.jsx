import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getActivities, addActivity, getCountries } from '../../redux/action';
import ActivitiesContainer from '../../components/ActivitiesContainer/ActivitiesContainer';
import style from './Form.module.css';

const Form = () => {
	const dispatch = useDispatch();
	const activities = useSelector((state) => state.activities);
	const countries = useSelector((state) => state.countries);
	const [checkedDifficulty, setCheckedDifficulty] = useState('');
	const [checkedSeason, setCheckedSeason] = useState('');
	const [errors, setErrors] = useState({});

	const [formData, setFormData] = useState({
		name: '',
		difficulty: '',
		duration: '',
		season: '',
		countryIds: [],
	});

	useEffect(() => {
		dispatch(getActivities());
		dispatch(getCountries());
	}, [dispatch]);

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

	const handleSelectCountry = (event) => {
		const selectedCountryId = event.target.value;

		if (formData.countryIds.includes(selectedCountryId)) {
			return;
		}

		setFormData({
			...formData,
			countryIds: [...formData.countryIds, event.target.value],
		});
		setErrors(
			validate({
				...formData,
				countryIds: [...formData.countryIds, event.target.value],
			})
		);
	};

	const handleSelectActivity = (event) => {
		setFormData({
			...formData,
			name: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		dispatch(addActivity(formData));
		setFormData({
			name: '',
			difficulty: '',
			duration: '',
			season: '',
			countryIds: [],
		});
		alert('activity created');
		dispatch(getActivities());
	};

	const validate = (data) => {
		let errors = {};
		const durationRegex = /^(?:[1-9]|1\d|2[0-3])$/;

		if (!durationRegex.test(data.duration)) {
			errors.duration = 'It has to be a number from 1 to 23';
		}
		if (data.countryIds.find((id) => formData.countryIds.includes(id))) {
			errors.countryIds = 'The selected country has already been entered';
		}

		return errors;
	};

	return (
		<div className={style.pag}>
			<div className={style.container}>
				<form onSubmit={handleSubmit} className={style.form}>
					<h1>Create your activity</h1>
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
						<label htmlFor='countryIds'>Countrys: </label>
						<select onChange={handleSelectCountry}>
							{countries.map((country) => (
								<option key={country.id} value={country.id}>
									{country.name}
								</option>
							))}
						</select>
						{errors.countryIds && <p className='error'>{errors.countryIds}</p>}
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
					<ul>
						<li>{formData.countryIds.map((country) => country + ', ')}</li>
					</ul>
					<button type='submit'>Submit</button>
				</form>
			</div>

			<ActivitiesContainer activities={activities} />
		</div>
	);
};

export default Form;
