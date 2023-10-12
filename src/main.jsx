import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import RepoDetails from './pages/Repodetails'
import ErrorPage from './pages/ErrorPage'
import AppOutlet from './pages/AppOutlet'

import { createRoot } from 'react-dom/client';

// Prueba de React Native:
// Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('navigation'));
root.render(<strong>Esto es React empotrado</strong>);
// Hasta acá

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/repodetails" element={<AppOutlet />}>
        <Route path=":id" element={<RepoDetails />} />
      </Route>
    </>

  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)


