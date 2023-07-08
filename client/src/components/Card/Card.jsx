import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = (props) => {
	return (
		<div className={style.container}>
			<Link to={`/home/${props.id}`}>
				<img src={props.image} />
			</Link>
			<p>Name:{props.name}</p>
			<p>Continent:{props.continent}</p>
		</div>
	);
};

export default Card;
