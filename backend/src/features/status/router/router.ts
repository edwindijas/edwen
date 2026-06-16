import Express from 'express';

import { statusRoutes } from './routes';

export const statusRouter = Express();

statusRouter.use('/status', statusRoutes);
