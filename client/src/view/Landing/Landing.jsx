import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
	return (
		<div className={style.container}>
			<h1>Esta es la vista de Landing</h1>
			<button>
				<Link to='/home'>HOME</Link>
			</button>
		</div>
	);
};

export default Landing;
