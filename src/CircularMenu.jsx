/**
 * Modified from https://codepen.io/ainalem/pen/YoyZpq
 **/

import { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import Box from '@mui/material/Box';
import "./CircularMenu.css";

export default function CircularMenu()
{
  const [isActive, setIsActive] = useState(false);

  return (
      <div className="circular-menu">
        <div className={isActive ? "active" : ""}>
          <div className="pie pie1" onClick={()=>setIsActive(false)}>
            <div className="pie-color pie-color1">
              <div className="portfolio-title">
                Portfolio
              </div>
            </div>
          </div>
          <div className="pie pie2" onClick={()=>setIsActive(false)}>
            <div className="pie-color pie-color2">
              <div className="freelance-title">
                Freelance
              </div>
            </div>
          </div>
          <div className="pie pie3" onClick={()=>setIsActive(false)}>
            <div className="pie-color pie-color3">
              <div className="tutoring-title">
                Tutoring
              </div>
            </div>
          </div>
          <div className="menu" onClick={()=>setIsActive(!isActive)}>
            <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                  <g
                    fill="none"
                    stroke="#000"
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