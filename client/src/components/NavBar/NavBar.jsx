import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
	return (
		<div className={style.container}>
			<Link to='/home'>
				<button className={style.myButton}>Home</button>
			</Link>

			<SearchBar />
			<Link to='/form'>
				<button className={style.myButton}>Form</button>
			</Link>
		</div>
	);
};

export default NavBar;
