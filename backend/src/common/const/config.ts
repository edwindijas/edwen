import { arrayToEnum } from '@ed-ai/shared/src/types/array';

export const CONFIG_ENV_VAR_NAMES = arrayToEnum([
  'SERVER_PORT',
  'SERVER_HOST',
  'CORS_ORIGIN',
  'DATABASE_URL',
  'REDIS_URL',
] as const);
