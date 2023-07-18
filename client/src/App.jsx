import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Detail, Form, Landing, DetailActivities } from './view/index';
import NavBar from './components/NavBar/NavBar';
import style from './App.module.css';

function App() {
	const location = useLocation();

	return (
		<div className={style.container}>
			{location.pathname !== '/' && <NavBar />}
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
				<Route path='/home/:id' element={<Detail />} />
				<Route path='/form' element={<Form />} />
				<Route path='/activities/:id' element={<DetailActivities />} />
			</Routes>
		</div>
	);
}

export default App;
