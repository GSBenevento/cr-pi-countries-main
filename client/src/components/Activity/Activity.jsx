import style from './Activity.module.css';

const Activity = (props) => {
	return (
		<div className={style.container}>
			<h2>Activity: {props.name}</h2>
			<h2>Difficulty: {props.difficulty}</h2>
			<h2>Duration: {props.duration}</h2>
			<h2>Season: {props.season}</h2>
		</div>
	);
};

export default Activity;
