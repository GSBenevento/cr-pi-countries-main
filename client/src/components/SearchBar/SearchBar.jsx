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
		console.log(name);
	};

	return (
		<form className={style.container}>
			<input
				type='search'
				name='search'
				placeholder='Buscar...'
				value={name}
				onChange={handleChange}
			/>
			<button type='submit' onClick={handleSubmit}>
				Buscar
			</button>
		</form>
	);
};

export default SearchBar;
