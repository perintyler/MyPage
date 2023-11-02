import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import PortfolioView from './portfolio/PortfolioView';
import TutoringView from './tutoring/TutoringView';
import ContactView from './contact/ContactView';
import CircularMenu from './CircularMenu';
import A404Page from './A404Page';
import './index.css';

function Layout()
{
    return (
        <div className="App">
            <CircularMenu />
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter([
{
    path: '/',
    element: <Layout />,
    errorElement: <A404Page />,
    children: [
    {
        path: '',
        element: <PortfolioView />
    },
    {
        path: 'contact',
        element: <ContactView />
    },
    {
        path: 'tutoring',
        element: <TutoringView />
    }]
}]);

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
