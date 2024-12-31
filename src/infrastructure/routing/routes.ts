import {RegisterPage} from "../views/pages/RegisterPage.ts";
import {PackagesPage} from "../views/pages/PackagesPage.ts";
import {HomePage} from "../views/pages/HomePage.ts";
import mainLayout from '../views/layouts/main.layout.html?raw'
import notFoundPage from '../views/pages/NotFoundPage.html?raw'
import {initializeCalendar} from "../views/components/initializeCalendar.ts";
type Route = {
    path: string;
    component: () => void; // O puedes usar una función asíncrona para cargas diferidas
    layout?: string;
};

const routes: Route[] = [
    { path: "/register", component: RegisterPage, layout: 'main.layout.html'},
    { path: "/michelle", component: PackagesPage, layout: 'main.layout.html'},
    { path: "/home", component: HomePage, layout: 'main.layout.html'},
    { path: "/", component: HomePage },
];

export const renderRoute = () => {
    const app = document.querySelector('#app');
    if (!app) throw new Error("No se encontró el elemento 'app'");

    const path = window.location.pathname;
    const route = routes.find(r => r.path === path);

    if (route) {
        app.innerHTML = mainLayout
        initializeCalendar()
    } else {
        app.innerHTML = notFoundPage; // Manejo de página no encontrada
    }
};