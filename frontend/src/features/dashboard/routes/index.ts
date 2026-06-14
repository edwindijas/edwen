import type { RouteObject } from 'react-router';

import { HomeLoader } from '../pages/home/loader';

export const dashboardRoutes: RouteObject = {
  path: '',
  children: [
    {
      path: '',
      Component: HomeLoader,
    },
  ],
};
