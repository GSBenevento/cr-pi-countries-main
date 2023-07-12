import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../../redux/action';
import ActivitiesContainer from '../../components/ActivitiesContainer/ActivitiesContainer';
import { useActionData } from 'react-router-dom';

const Form = () => {
	const dispatch = useDispatch();
	const activities = useSelector((state) => state.activities);

	useEffect(() => {
		dispatch(getActivities());
	}, [dispatch]);

	return (
		<>
			<h1>Esta es la vista de Form</h1>

			<ActivitiesContainer activities={activities} />
		</>
	);
};

export default Form;
