type CalendarDayProps = {
    day: number; // Día del mes
    month: string; // Mes actual
    year: string; // Año actual
    htmlTemplate?: string; // Plantilla HTML para representar la celda del calendario
    onClick?: (selectedDate: string) => void; // Callback para el evento de selección de día
};

export const CalendarDay = ({ day, month, year, htmlTemplate, onClick }: CalendarDayProps): HTMLElement => {
    // Usar plantilla HTML si está proporcionada, de otro modo crearla directamente
    let dayElement: HTMLElement;

    if (!htmlTemplate) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = htmlTemplate.trim();
        dayElement = wrapper.firstElementChild as HTMLElement;
    } else {
        // Si no se proporciona HTML, crear una versión por defecto
        dayElement = document.createElement('div');
        dayElement.className = 'calendar__day';
        dayElement.className += ' calendar__column';
        dayElement.textContent = String(day);
    }

    // Modificar las propiedades dinámicamente
    dayElement.setAttribute('data-day', String(day));
    dayElement.setAttribute('data-month', month);
    dayElement.setAttribute('data-year', year);
    dayElement.textContent = String(day);

    // Agregar el evento de selección
    dayElement.addEventListener('click', () => {
        const selected = document.querySelector('.calendar__column--selected');
        if (selected) {
            selected.classList.remove('calendar__column--selected');
        }

        dayElement.classList.add('calendar__column--selected');

        // Disparar el callback sea definido y pasar la fecha seleccionada
        if (onClick) {
            const formattedDate = `${day}-${month}-${year}`;
            onClick(formattedDate);
        }
    });

    return dayElement;
};