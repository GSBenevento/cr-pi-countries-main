const { Router } = require('express');
const {
	postActivities,
	getActivities,
	deleteActivities,
	getActivitiesById,
	updateActivities,
} = require('../controllers/activitiesHandler');

const userRouter = Router();

userRouter.get('/', getActivities);

userRouter.get('/:id', getActivitiesById);

userRouter.post('/', postActivities);

userRouter.delete('/:id', deleteActivities);

userRouter.put('/:id', updateActivities);

module.exports = userRouter;
