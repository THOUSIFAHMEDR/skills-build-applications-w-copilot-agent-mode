import { Router } from 'express';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Team } from '../models/team';
import { User } from '../models/user';
import { Workout } from '../models/workout';
import { createResourceRouter } from './resourceRoutes';

const apiRouter = Router();

apiRouter.use('/users', createResourceRouter(User));
apiRouter.use('/teams', createResourceRouter(Team));
apiRouter.use('/activities', createResourceRouter(Activity));
apiRouter.use('/leaderboard', createResourceRouter(Leaderboard));
apiRouter.use('/workouts', createResourceRouter(Workout));

export default apiRouter;
