import React from 'react';
import ReactDOM from 'react-dom/client';
//import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Items from './pages/Items';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/items',
//     element: <Items/>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
