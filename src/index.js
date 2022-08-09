import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ResultsContextProvider } from './contexts/ResultsContextProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ResultsContextProvider>
     <BrowserRouter>
       <App/>
    </BrowserRouter>
    </ResultsContextProvider>
);
