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
		const response = await Activity.findAll({
			include: [
				{
					model: Country,
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

const getActivitiesById = async (req, res) => {
	try {
		const { id } = req.params;

		if (id) {
			const activity = await Activity.findByPk(id, {
				include: [
					{
						model: Country,
						through: { attributes: [] },
					},
				],
				attributes: { exclude: ['country_activity'] },
			});
			res.status(200).json(activity);
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const deleteActivities = async (req, res) => {
	try {
		const { id } = req.params;

		if (!id) throw new Error('Missing activity ID');

		const response = await Activity.findByPk(id);
		response.destroy();

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const updateActivities = async (req, res) => {
	try {
		const { name, difficulty, duration, season } = req.body;
		const { id } = req.params;

		if (!id) throw new Error('Missing activity ID');

		const activity = await Activity.findByPk(id);
		if (!activity) throw new Error('Activity not found');

		if (name) activity.name = name;
		if (difficulty) activity.difficulty = difficulty;
		if (duration) activity.duration = duration;
		if (season) activity.season = season;
		await activity.save();

		res.status(200).json(activity);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	postActivities,
	getActivities,
	deleteActivities,
	getActivitiesById,
	updateActivities,
};
