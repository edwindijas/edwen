import Express from 'express';

import * as statusController from '../controller';

export const statusRoutes = Express();

statusRoutes.get('/server', statusController.getServerStatus);
