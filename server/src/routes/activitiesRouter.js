const { Router } = require('express');
const {
	postActivities,
	getActivities,
} = require('../controllers/activitiesHandler');

const userRouter = Router();

userRouter.get('/', getActivities);

userRouter.post('/', postActivities);

module.exports = userRouter;
