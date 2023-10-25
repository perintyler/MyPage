import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import PortfolioView from './portfolio/PortfolioView';
import TutoringView from './tutoring/TutoringView';
import FreelanceView from './freelance/FreelanceView';
import CircularMenu from './CircularMenu';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <PortfolioView />
  }, 
  {
    path: "/tutoring",
    element: <TutoringView />
  },
  {
    path: "/freelance",
    element: <FreelanceView />
  },
  {
    path: "*",
    element: <Navigate to="/portfolio" replace />
  }
]);

export default function Portfolio()
{
    return (
        <div className="App">
            <CircularMenu />
            <RouterProvider router={router} />
        </div>
    );
}
