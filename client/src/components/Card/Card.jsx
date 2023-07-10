import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = (props) => {
	return (
		<div className={style.container}>
			<Link to={`/home/${props.id}`} className={style.link}>
				<img src={props.image} />
				<p>Name: {props.name}</p>
				<p>Continent: {props.continent}</p>
			</Link>
		</div>
	);
};

export default Card;
