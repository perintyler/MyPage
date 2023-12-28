/*** Analytics.jsx ***/

import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNiUKzDBe6hfcR5mY0AgqUl39zPDVnx3s",
  authDomain: "mypage-b2d7d.firebaseapp.com",
  databaseURL: "https://mypage-b2d7d-default-rtdb.firebaseio.com",
  projectId: "mypage-b2d7d",
  storageBucket: "mypage-b2d7d.appspot.com",
  messagingSenderId: "721987776666",
  appId: "1:721987776666:web:182f48f28817180475ef23",
  measurementId: "G-LND2VNCZPC"
};

// environment config
const ENABLE_ANALYTICS = (process.env.REACT_APP_ENABLE_ANALYTICS === 'true');
const VERBOSE          = (process.env.REACT_APP_VERBOSE          === 'true');

// initilize firebase analytics for production environments
const app       = process.env.REACT_APP_ENABLE_ANALYTICS ? initializeApp(firebaseConfig) : null;
const analytics = process.env.REACT_APP_ENABLE_ANALYTICS ? getAnalytics(app)             : null;

function log(event, properties)
{
  if (ENABLE_ANALYTICS) {
    logEvent(analytics, event, properties);
  } else if (VERBOSE) {
    console.log({event, properties})
  }
}

export const usePageViewLogger = (page) => 
{
  useEffect(() => {
    log('page_view', { page: page });

    return () => {
      log('page_exit', { page: page });
    };
  }, [page]);

  return null;
};

export const onClickLogger = (buttonType, buttonName, onClick) =>
{
  var handleClick = (event) => {
    log('button_click', { buttonType, buttonName });
    return onClick(event);
  };

  return handleClick;
}