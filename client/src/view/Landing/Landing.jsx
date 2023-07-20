import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
	return (
		<div className={style.container}>
			<h1 className={style.text}>
				"Countries are like colors on the canvas of our world, each one
				contributing its unique hue to paint the diversity and beauty of
				humanity."
			</h1>
			<Link to='/home' className={style.link}>
				<button className={style.button}>Home</button>
			</Link>
		</div>
	);
};

export default Landing;
