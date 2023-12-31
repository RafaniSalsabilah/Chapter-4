import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { Assync } from './routes/Assync';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryMovie = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <Assync/>
    </QueryClientProvider>
  </React.StrictMode>
);
