const { Country } = require('./db');
const axios = require('axios');

const loadDb = async () => {
	const countriesData = Country.findAll();
	if (!countriesData.length) {
		const dataApi = await axios.get('http://localhost:5000/countries');
		const infoApi = await dataApi.data.map((ccontry) => {
			return {
				id: ccontry.cca3,
				name: ccontry.name.official,
				image: ccontry.flags.png,
				continent: ccontry.continents[0],
				capital: ccontry.capital ? ccontry.capital[0] : 'Capital',
				subregion: ccontry.subregion ? ccontry.subregion : 'Subregion',
				area: ccontry.area,
				population: ccontry.population,
			};
		});
		for (let i = 0; i < infoApi.length; i++) {
			await Country.findOrCreate({
				where: { name: infoApi[i].name },
				defaults: infoApi[i],
			});
		}
	}
};

module.exports = loadDb;
