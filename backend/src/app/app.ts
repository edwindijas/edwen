import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Express from 'express';

import { errorHandler, responseFormatter } from '@/middleware/';

import { CONFIG_ENV_VAR_NAMES } from '../common/const/config';

import { appRouter } from './router';

import { getEnvVariable } from '@/utils/env';

export const app = Express();

const corsOptions = {
  origin: getEnvVariable(CONFIG_ENV_VAR_NAMES.CORS_ORIGIN),
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(Express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(responseFormatter);
app.use(appRouter);

app.use(errorHandler);
