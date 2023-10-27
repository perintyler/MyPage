import * as React from 'react';
import {
  Navigate,
  Routes, 
  Route
} from "react-router-dom";

import PortfolioView from './portfolio/PortfolioView';
import TutoringView from './tutoring/TutoringView';
import ContactView from './ContactView';
import CircularMenu from './CircularMenu';

import './App.css';

const ROUTES = {
  '/portfolio': PortfolioView,
  '/contact': ContactView,
  '/tutoring': TutoringView
};

export default function App()
{
    var allowedRoutes = Object.keys(ROUTES).map((path) => {
        var RouteView = ROUTES[path];
        return <Route key={path} path={path} element={<RouteView />} />;
    });

    var disallowedRouteRedirect = (
        <Route path="*" element={
            <Navigate to="/portfolio" replace />
        }/>
    );

    return (
        <div className="App">
            <CircularMenu />
            <Routes>{allowedRoutes}{disallowedRouteRedirect}</Routes>
        </div>
    );
}
