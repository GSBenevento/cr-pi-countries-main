import style from './Card.module.css';

const Card = (props) => {
	return (
		<div className={style.container}>
			<img src={props.image} />
			<p>Name:{props.name}</p>
			<p>Continent:{props.continent}</p>
		</div>
	);
};

export default Card;
