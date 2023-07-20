import React from 'react';
import style from './Paginado.module.css';

const Paginado = ({ countriesForPage, countries, paginado, currentPage }) => {
	const pageNumber = [];

	// funcion for para la creacion de los numeros del paginado
	for (let i = 0; i <= Math.ceil(countries / countriesForPage); i++) {
		pageNumber.push(i);
	}

	//funcion que controla la funcion del boton prev
	const prevPage = () => {
		paginado(currentPage - 1);
	};

	//funcion que controla la funcion del boton next
	const nextPage = () => {
		paginado(currentPage + 1);
	};

	// esta funcion controla que en la paginacion de que se muestra en pantalla
	// solo se muestre 5 numeros
	const getDisplayPageNumbers = () => {
		const totalPageNumber = pageNumber.length;
		const displayPageNumbers = [];

		if (totalPageNumber <= 5) {
			displayPageNumbers.push(...pageNumber);
		} else {
			let startPage = currentPage - 2;
			let endPage = currentPage + 2;

			if (startPage <= 0) {
				startPage = 1;
				endPage = 5;
			} else if (endPage > totalPageNumber) {
				endPage = totalPageNumber;
				startPage = totalPageNumber - 4;
			}

			for (let i = startPage; i <= endPage; i++) {
				displayPageNumbers.push(i);
			}
		}

		return displayPageNumbers;
	};

	return (
		<nav className={style.nav}>
			<ul className={style.ul}>
				<button onClick={prevPage} disabled={currentPage === 1}>
					Prev
				</button>
				{pageNumber &&
					getDisplayPageNumbers().map((number) => (
						<li
							className={
								number === currentPage ? style.number.active : style.number
							}
							key={number}>
							<a onClick={() => paginado(number)} className={style.a}>
								{number}
							</a>
						</li>
					))}
				<button
					onClick={nextPage}
					disabled={currentPage === pageNumber.length - 1}>
					Next
				</button>
			</ul>
		</nav>
	);
};

export default Paginado;
