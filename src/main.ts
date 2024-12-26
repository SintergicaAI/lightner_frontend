import './infrastructure/assets/css/style.css'
import './infrastructure/assets/css/layout.css'
import './infrastructure/assets/css/components.css'
// import './infrastructure/assets/css/sidebar.css'
import './infrastructure/assets/css/breadcrumps.css'
import './infrastructure/assets/css/utils.css'
import './infrastructure/assets/css/main.layout.css'
import {RegisterPage} from "./infrastructure/views/pages/RegisterPage.ts";
import {PackagesPage} from "./infrastructure/views/pages/PackagesPage.ts";
import {HomePage} from "./infrastructure/views/pages/HomePage.ts";
import mainLayout from './infrastructure/views/layouts/main.layout.html?raw'
import notFoundPage from './infrastructure/views/pages/NotFoundPage.html?raw'


const renderPage = () => {

    const app = document.querySelector('#app')

    if (!app) throw new Error("Could not find the app")
    const path = window.location.pathname;
    if (path === "/register") {
        RegisterPage();
    } else if (path === "/michelle") {
        window.document.title = "Michelle";
        app.innerHTML = mainLayout;
        PackagesPage();
    } else if (path === "/home") {
        if (!app) throw new Error("Elemento 'app' no encontrado");
        window.document.title = "Home";
        app.innerHTML = mainLayout;
    } else if (path === "/") {
        HomePage();
    } else {
        //Not found page
        app.innerHTML = notFoundPage;
    }
};
document.addEventListener("DOMContentLoaded", () => {


    window.addEventListener("popstate", renderPage);
    renderPage();

    const days = document.querySelectorAll<HTMLDivElement>('.calendar__day');

    days.forEach(day => {
        day.addEventListener('click', function() {
            const selected = document.querySelector('.calendar__column--selected');
            if(selected) {
                selected.classList.remove('calendar__column--selected');
            }

            day.classList.add('calendar__column--selected');
            const currentMonth = document.getElementById("current-month");
            const currentYear = document.getElementById("current-year");
            const dayNumber = day ? day.textContent?.trim() : '';
            const month = currentMonth?.getAttribute('data-month');
            const year = currentYear?.getAttribute('data-year');

            const selectedDate = document.getElementById('selectedDate');

            if(selectedDate) {
                selectedDate.innerHTML = `${dayNumber}-${month}-${year}`
            }
        });
    });
});

