const { Country, Activity } = require('../db');

const postActivities = async (req, res) => {
	const { name, difficulty, duration, season, countryIds } = req.body;
	try {
		if (!name || !difficulty || !duration || !season || !countryIds) {
			throw Error('Missing data');
		}

		const newActivity = await Activity.create({
			name,
			difficulty,
			duration,
			season,
		});

		if (countryIds && countryIds.length > 0) {
			const countries = await Country.findAll({
				where: { id: countryIds },
			});
			await newActivity.setCountries(countries);
		}

		res.status(200).json(newActivity);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getActivities = async (req, res) => {
	try {
		const response = await Activity.findAll();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	postActivities,
	getActivities,
};
