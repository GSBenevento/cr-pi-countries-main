import Card from '../Card/Card';
import style from './CardsContainer.module.css';
const CardsContainer = ({ pageElements }) => {
	return (
		<div className={style.container}>
			{pageElements?.map((country) => {
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
