const { Country } = require('../db');

const getCountries = async (req, res) => {
	try {
		const response = await Country.findAll();
		res.status(200).json(response);
	} catch (error) {
		res.status(400).send(message.error);
	}
};

const getCountriesById = async (req, res) => {
	const id = req.query;
	try {
		const response = await Country.findOne({ where: { id } });
		res.status(200).json(response);
	} catch (error) {
		res.status(400).send(message.error);
	}
};

const getCountriesByName = async (req, res) => {};

module.exports = {
	getCountries,
	getCountriesById,
	getCountriesByName,
};
