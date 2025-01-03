import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import "./infrastructure/assets/css/style.css";
import './infrastructure/assets/css/style.css'
import './infrastructure/assets/css/layout.css'
import './infrastructure/assets/css/components.css'
import './infrastructure/assets/css/breadcrumps.css'
import './infrastructure/assets/css/utils.css'
import './infrastructure/assets/css/main.layout.css'

ReactDOM.hydrateRoot(
        document,
        <React.StrictMode>
            <HydratedRouter />
        </React.StrictMode>
);
