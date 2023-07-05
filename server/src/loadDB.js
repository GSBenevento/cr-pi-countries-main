const { Country } = require('./db');
const axios = require('axios');

const loadDb = async () => {
	const dataDB = Country.findAll();
	if (!dataDB.length) {
		const countriesData = await axios.get('http://localhost:5000/countries');
		const countriesToCreate = await countriesData.data.map((country) => {
			return {
				id: country.cca3,
				name: country.name.official,
				image: country.flags.png,
				continent: country.continents[0],
				capital: country.capital ? country.capital[0] : 'Capital',
				subregion: country.subregion ? country.subregion : 'Subregion',
				area: country.area,
				population: country.population,
			};
		});
		Country.bulkCreate(countriesToCreate)
			.then(() => {
				console.log('Registros creados exitosamente.');
			})
			.catch((error) => {
				console.error('Error al crear registros:', error);
			});
	}
};

module.exports = loadDb;
