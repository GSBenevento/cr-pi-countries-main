import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
	return (
		<div className={style.container}>
			<Link to='/home'>HOME</Link>
			<SearchBar />
			<Link to='/form'>FORM</Link>
		</div>
	);
};

export default NavBar;
