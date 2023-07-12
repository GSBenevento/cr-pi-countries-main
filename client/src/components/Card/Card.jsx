import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.divTransform}>
				<Link to={`/home/${props.id}`} className={styles.link}>
					<img src={props.image} alt='Country' className={styles.img} />
					<p className={styles.text}>Country: {props.name}</p>
					<p className={styles.text}>Continent: {props.continent}</p>
				</Link>
			</div>
		</div>
	);
};

export default Card;
