import './infrastructure/assets/css/style.css'
import './infrastructure/assets/css/components.css'
import {RegisterPage} from "./infrastructure/views/pages/RegisterPage.ts";
import {ServicesPage} from "./infrastructure/views/pages/ServicesPage.ts";

document.addEventListener("DOMContentLoaded", () => {
    const renderPage = () => {
        const path = window.location.pathname;
        if (path === "/register") {
            RegisterPage();
        } else if (path === "/services") {
            ServicesPage();
        }
    };

    window.addEventListener("popstate", renderPage);
    renderPage();
});