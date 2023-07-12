import Activity from '../Activity/Activity';
import style from './ActivitiesContainer.module.css';

const ActivitiesContainer = ({ activities }) => {
	return (
		<div className={style.container}>
			{activities?.map((activity) => {
				return (
					<Activity
						key={activity.id}
						id={activity.id}
						name={activity.name}
						difficulty={activity.difficulty}
						duration={activity.duration}
						season={activity.season}
					/>
				);
			})}
		</div>
	);
};

export default ActivitiesContainer;
