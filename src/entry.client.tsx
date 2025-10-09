// src/entry.client.tsx
import './index.css';

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

import ThemeToggler from './components/ThemeToggler';

hydrateRoot(
  document,
  <React.StrictMode>
    <ThemeToggler />
    <HydratedRouter />
  </React.StrictMode>,
);
