

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootPage from './routes/root-page';
import ErrorPage from './routes/error-page';
import BankPage from './routes/bank-page';
import OrderPage from './routes/order-page';

const router = createBrowserRouter([
  { path: '/', element: <RootPage />, errorElement: <ErrorPage /> },
  { path: '/bank', element: <BankPage />, errorElement: <ErrorPage /> },
  { path: '/order', element: <OrderPage />, errorElement: <ErrorPage /> },
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

