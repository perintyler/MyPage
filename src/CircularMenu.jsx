/**
 * Modified from https://codepen.io/ainalem/pen/YoyZpq
 **/

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CircularMenu.css";

function NavigationButton({ path, children })
{
  return <NavLink to={path} className="navigation-button">{children}</NavLink>;
}

export default function CircularMenu()
{
  const [isActive, setIsActive] = useState(false);

  return (
      <div className="circular-menu">
        <div className={isActive ? "active" : ""}>
          <div className="pie pie1" onClick={()=>setIsActive(false)}>
            <NavigationButton path="/">
              <div className="pie-color pie-color1">
                <div className="portfolio-title">
                  Portfolio
                </div>
              </div>
            </NavigationButton>
          </div>
          <div className="pie pie2" onClick={()=>setIsActive(false)}>
            <NavigationButton path="/contact">
              <div className="pie-color pie-color2">
                <div className="contact-title">
                  Contact
                </div>
              </div>
            </NavigationButton>
          </div>
          <div className="pie pie3" onClick={()=>setIsActive(false)}>
            <NavigationButton path="/tutoring">
              <div className="pie-color pie-color3">
                <div className="tutoring-title">
                  Tutoring
                </div>
              </div>
            </NavigationButton>
          </div>
          <div className="menu" onClick={()=>setIsActive(!isActive)}>
            <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                  <g
                    fill="none"
                    stroke="white"
                    strokeWidth="7.999"
                    strokeLinecap="round"
                  >
                    <path d="M 55,26.000284 L 24.056276,25.999716" />
                    <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                    <path d="M 45,73.999716 L 75.943724,74.000284" />
                    <path d="M 75.943724,26.000284 L 45,25.999716" />
                    <path d="M 24.056276,73.999716 L 55,74.000284" />
                  </g>
                </svg>
          </div>
        </div>
      </div>
  );
}