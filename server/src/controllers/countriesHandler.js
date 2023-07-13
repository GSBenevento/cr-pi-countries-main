const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getCountries = async (req, res) => {
	try {
		const { name } = req.query;

		if (name) {
			const response = await Country.findAll({
				where: { name: { [Op.iLike]: `%${name}%` } },
				include: [
					{
						model: Activity,
						through: { attributes: [] },
					},
				],
				attributes: { exclude: ['country_activity'] },
			});
			return res.status(200).json(response);
		}

		const response = await Country.findAll({
			include: [
				{
					model: Activity,
					through: { attributes: [] },
				},
			],
			attributes: { exclude: ['country_activity'] },
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const getCountriesById = async (req, res) => {
	try {
		const { id } = req.params;

		if (id) {
			const country = await Country.findByPk(id, {
				include: [
					{
						model: Activity,
						through: { attributes: [] },
					},
				],
				attributes: { exclude: ['country_activity'] },
			});
			res.status(200).json(country);
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getCountries,
	getCountriesById,
};
