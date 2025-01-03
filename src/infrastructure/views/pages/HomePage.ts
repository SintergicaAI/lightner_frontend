import homeTemplate from "../templates/home.html?raw";
import {initializeCalendar} from "../components/initializeCalendar.ts";


export function HomePage(): void {

    const app = document.getElementById("lightner-content");
    if (!app) throw new Error("Elemento 'app' no encontrado");
    app.innerHTML = homeTemplate;

    document.addEventListener('DOMContentLoaded', () => {
        initializeCalendar();
        console.log('El calendario ha sido inicializado.');
    });

}