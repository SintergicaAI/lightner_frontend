// Lógica para inicializar el calendario dinámicamente
import {Calendar} from "./Calendar.ts";

export const initializeCalendar = () => {
    const app = document.querySelector('.calendar');
    if (!app) throw new Error("No se encontró el contenedor '#app'");

    // Parámetros para el calendario
    const daysInMonth = new Date(2023, 10, 0).getDate(); // Octubre tiene 31 días
    const currentMonth = '10'; // Octubre (10)
    const currentYear = '2023'; // Año actual

    // Crear el contenedor del calendario
    const calendar = Calendar(daysInMonth, currentMonth, currentYear);

    // Agregar el calendario al contenedor
    app.appendChild(calendar);
};