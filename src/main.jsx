import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import FilmPage from './pages/FilmPage.jsx';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/', //home page, page 1
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/:pageNumber', //pages
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/film/:filmId', //film detail page based on film id so that people can access directly if they have a link (not frontend js dependent)
		element: <FilmPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
