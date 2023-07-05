const { Router } = require('express');
const {
	getCountries,
	getCountriesById,
	getCountriesByName,
} = require('../controllers/countriesHandler');

const userRouter = Router();

userRouter.get('/', getCountries);

userRouter.get('/countries/:id', getCountriesById);

userRouter.get('/countries/:name', getCountriesByName);

module.exports = userRouter;
