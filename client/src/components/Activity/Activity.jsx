import style from './Activity.module.css';

const Activity = (props) => {
	return (
		<div className={style.container}>
			<h3>Activity: {props.name}</h3>
			<h3>Difficulty: {props.difficulty}</h3>
			<h3>Duration (in hours): {props.duration}</h3>
			<h3>Season: {props.season}</h3>
			<h3>Coutries: </h3>
			<ul>
				<li>
					{props.Countries.map((country) => (
						<span key={country.name}>
							{country.name},
							<br />
						</span>
					))}
				</li>
			</ul>
		</div>
	);
};

export default Activity;
