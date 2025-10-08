import { type RouteConfig } from '@react-router/dev/routes';

export default [
  {
    path: '/',
    file: './pages/Home.tsx',
  },
  {
    path: '/tavling',
    file: './pages/Competition.tsx',
  },
] satisfies RouteConfig;
