import packageTemplate from "../templates/service.html?raw"; // Import the template as text without processing
import {setupCounter} from "../components/counter.ts";
import {initializeServicesForm} from "../../../services.form.ts";
import {ping} from "../../../adapters/api/ping.ts";
import {Calendar} from "../components/Calendar.ts";


const initializeCalendar = () => {
    const app = document.querySelector('#app');

    if (!app) {
        throw new Error("No se encontró el contenedor '#app'");
    }

    // Configuración del calendario
    const daysInMonth = 30; // Ejemplo: Octubre tiene 30 días
    const currentMonth = '10'; // Octubre
    const currentYear = '2023';

    const calendar = Calendar(daysInMonth, currentMonth, currentYear);
    app.appendChild(calendar);
}

export function PackagesPage(): void {

    const app = document.getElementById("lightner-content");
    if (!app) throw new Error("Elemento 'app' no encontrado")
    app.innerHTML = packageTemplate;
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


    const pingButton = document.querySelector<HTMLButtonElement>('#ping-button');
    if (pingButton) {
        pingButton.addEventListener('click', async () => {
            const result = await ping();
            console.log(result);
        });
    }

    initializeServicesForm(document.querySelector<HTMLFormElement>('#form')!)
    document.addEventListener('DOMContentLoaded', initializeCalendar);

}