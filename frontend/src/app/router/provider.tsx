import type { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router';

import { routes } from './routes';

export const RouterProvider = (): ReactElement => {
  const router = createBrowserRouter(routes);
  return <ReactRouterProvider router={router} />;
};
