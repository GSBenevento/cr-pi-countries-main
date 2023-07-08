import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
const CardsContainer = () => {
	const countries = useSelector((state) => state.countries);
	return (
		<div className={style.container}>
			{countries.map((country) => {
				return (
					<Card
						key={country.id}
						id={country.id}
						name={country.name}
						image={country.image}
						continent={country.continent}
						capital={country.capital}
						subregion={country.subregion}
						area={country.area}
						population={country.population}
					/>
				);
			})}
		</div>
	);
};

export default CardsContainer;
