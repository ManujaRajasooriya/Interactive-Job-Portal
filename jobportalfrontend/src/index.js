import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JobDetails from './JobDetails';
import CreateJob from './CreateJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/jobdetails",
    element: <JobDetails />
  },
  {
    path: "/createjob",
    element: <CreateJob />
  },
  {
    path: "/jobdetails/:id",
    element: <JobDetails />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
