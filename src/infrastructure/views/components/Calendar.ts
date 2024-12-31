import { CalendarDay } from './CalendarDay';

export const Calendar = (daysInMonth: number, currentMonth: string, currentYear: string): HTMLElement => {
    const calendarElement = document.createElement('div');
    calendarElement.classList.add('calendar__body');

    const template = `
    <div class="calendar__column calendar__day">
      <span class="calendar__day"></span>
    </div>
  `;

    const headerRow = document.createElement('div');
    headerRow.className = 'calendar__row calendar__row--header';
    headerRow.innerHTML = `
  <div class="calendar__column">D</div>
  <div class="calendar__column">L</div>
  <div class="calendar__column">M</div>
  <div class="calendar__column">X</div>
  <div class="calendar__column">J</div>
  <div class="calendar__column">V</div>
  <div class="calendar__column">S</div>`
    calendarElement.appendChild(headerRow);
    

    // Obtener el día de la semana del primer día del mes
    const firstDayOfMonth = new Date(currentYear, parseInt(currentMonth, 10) - 1, 1).getDay(); // 0 = Domingo, 6 = Sábado

    // Calcular total de celdas necesarias (días + espacios vacíos al inicio y final)
    const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;

    // Crear filas de días del calendario
    let rowElement = document.createElement('div');
    rowElement.className = 'calendar__row';

    for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
        const cellElement = document.createElement('div');

        if (cellIndex < firstDayOfMonth || cellIndex >= firstDayOfMonth + daysInMonth) {
            // Celdas vacías (antes del primer día o después del último día)
            cellElement.className = 'calendar__column';
            cellElement.className += ' calendar__day';
        } else {
            // Crear días del mes
            const day = cellIndex - firstDayOfMonth + 1; // Calcular el día real desde cellIndex
            const dayComponent = CalendarDay({
                day,
                month: currentMonth,
                year: currentYear,
                htmlTemplate: template,
                onClick: (selectedDate) => {
                    const selectedDateElement = document.getElementById('selectedDate');
                    if (selectedDateElement) {
                        selectedDateElement.textContent = `Seleccionado: ${selectedDate}`;
                    }
                },
            });

            cellElement.appendChild(dayComponent);
        }

        rowElement.appendChild(cellElement);

        // Si la fila está completa (7 columnas), añadirla al calendario
        if ((cellIndex + 1) % 7 === 0) {
            calendarElement.appendChild(rowElement);
            rowElement = document.createElement('div');
            rowElement.className = 'calendar__row';
        }
    }

    return calendarElement;
};