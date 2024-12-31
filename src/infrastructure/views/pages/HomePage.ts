import homeTemplate from "../templates/home.html?raw";
import {Sidebar} from "../components/Sidebar.ts";
import {Calendar} from "../components/Calendar.ts";
import {initializeCalendar} from "../components/initializeCalendar.ts";



export function HomePage(): void {

    const app = document.getElementById("app");
    if (!app) throw new Error("Elemento 'app' no encontrado");
    app.innerHTML = homeTemplate;


    const sidebar= Sidebar()

    const sidebarButton = document.querySelector<HTMLButtonElement>('.sidebar-toggle');

    function toggleSidebar() {
        sidebar?.classList.toggle('sidebar--visible');
    }

    if (sidebarButton) {
        sidebarButton.addEventListener('click', toggleSidebar);
    }
    document.addEventListener('DOMContentLoaded', initializeCalendar);

}