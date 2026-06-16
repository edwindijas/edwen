import Express from 'express';
import { appRoutes } from './routes';

export const appRouter = Express();

appRouter.use('/api', appRoutes);
