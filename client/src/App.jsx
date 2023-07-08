import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Detail, Form, Landing } from './view/index';
import NavBar from './components/NavBar/NavBar';

function App() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== '/' && <NavBar />}
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
				<Route path='/home/:id' element={<Detail />} />
				<Route path='/form' element={<Form />} />
			</Routes>
		</>
	);
}

export default App;
