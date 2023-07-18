const { Router } = require('express');
const {
	postActivities,
	getActivities,
	deleteActivities,
	getActivitiesById,
} = require('../controllers/activitiesHandler');

const userRouter = Router();

userRouter.get('/', getActivities);

userRouter.get('/:id', getActivitiesById);

userRouter.post('/', postActivities);

userRouter.delete('/:id', deleteActivities);

module.exports = userRouter;
