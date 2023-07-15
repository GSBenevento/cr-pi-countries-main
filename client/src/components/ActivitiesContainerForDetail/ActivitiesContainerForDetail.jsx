import ActivityDetail from '../ActivityDetail/ActivityDetail';
import style from './ActivitiesContainerFromDetail.module.css';

const ActivitiesContainerForDetail = ({ activities }) => {
	return (
		<div className={style.container}>
			{activities?.map((activity) => {
				return (
					<ActivityDetail
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

export default ActivitiesContainerForDetail;
