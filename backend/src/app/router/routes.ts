import { statusRouter } from '@/src/features/status/router/router';
import Express from 'express';

export const appRoutes = Express();

appRoutes.use(statusRouter);
