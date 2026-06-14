import { lazy, Suspense, type ReactElement } from 'react';

const HomeComponent = lazy(async () => {
  const { DashboardHome } = await import('./home');
  return { default: DashboardHome };
});

export const HomeLoader = (): ReactElement => {
  return (
    <Suspense fallback="loading">
      <HomeComponent />
    </Suspense>
  );
};
