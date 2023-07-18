import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../redux/action';
import style from './SearchBar.module.css';

const SearchBar = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	const handleChange = (event) => {
		event.preventDefault();
		setName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(getCountryByName(name));
		setName('');
	};

	return (
		<form className={style.container}>
			<input
				type='search'
				name='search'
				placeholder='Search...'
				value={name}
				onChange={handleChange}
			/>
			<button type='submit' onClick={handleSubmit}>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
