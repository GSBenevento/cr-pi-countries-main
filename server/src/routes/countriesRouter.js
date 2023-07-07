const { Router } = require('express');
const { getCountries } = require('../controllers/countriesHandler');
const { getCountriesById } = require('../controllers/countriesHandler');
const userRouter = Router();

userRouter.get('/', getCountries);

userRouter.get('/countries?name=', getCountries);

userRouter.get('/:id', getCountriesById);

module.exports = userRouter;
