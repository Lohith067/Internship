// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <ToastContainer />
//     <App />
//   </>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your CSS file
import App from './App'; // Make sure it's importing App.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* This should render your App component */}
  </React.StrictMode>
);

reportWebVitals();
