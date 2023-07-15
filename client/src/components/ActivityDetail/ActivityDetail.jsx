import style from './ActivityDetail.module.css';

const ActivityDetail = (props) => {
	return (
		<div className={style.container}>
			<h3>Activity: {props.name}</h3>
			<h3>Difficulty: {props.difficulty}</h3>
			<h3>Duration (in hours): {props.duration}</h3>
			<h3>Season: {props.season}</h3>
		</div>
	);
};

export default ActivityDetail;
