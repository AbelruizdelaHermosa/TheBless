import React from "react";
import { createRoot } from 'react-dom/client';
import RouteApp from './component/RouteApp';
import './index.css'


const root =  createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <RouteApp />
  </React.StrictMode>
);