const { Router } = require('express');
const {
	postActivities,
	getActivities,
	deleteActivities,
} = require('../controllers/activitiesHandler');

const userRouter = Router();

userRouter.get('/', getActivities);

userRouter.post('/', postActivities);

userRouter.delete('/:id', deleteActivities);

module.exports = userRouter;
