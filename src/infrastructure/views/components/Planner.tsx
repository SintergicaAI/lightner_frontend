import React, {useEffect, useState} from "react";
import './Planner.css';

const WEEKDAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const DAYS = [
    {date: 1, tasks: "2 tasks\n2 hours", reminders: "7 reminders"},
    {date: 2},
    {date: 3, tasks: "1 task\n1 hour", reminders: "2 reminders"},
    {date: 4, tasks: "3 tasks\n4 hours", reminders: "1 reminder"},
    {date: 5, tasks: "2 tasks", reminders: "5 reminders"},
    {date: 6},
    {date: 7, tasks: "4 tasks\n3 hours", reminders: "6 reminders"},
    {date: 8, tasks: "1 task", reminders: "1 reminder"},
    {date: 9},
    {date: 10, tasks: "2 tasks\n2 hours", reminders: "7 reminders"},
    {date: 11},
    {date: 12, tasks: "3 tasks", reminders: "3 reminders"},
    {date: 13, tasks: "5 tasks\n2 hours"},
    {date: 14, reminders: "4 reminders"},
    {date: 15, tasks: "1 task\n1 hour", reminders: "2 reminders"},
    {date: 16},
    {date: 17, tasks: "2 tasks", reminders: "5 reminders"},
    {date: 18},
    {date: 19, reminders: "1 reminder"},
    {date: 20, tasks: "4 tasks\n3 hours"},
    {date: 21, tasks: "1 task", reminders: "1 reminder"},
    {date: 22, tasks: "3 tasks", reminders: "3 reminders"},
    {date: 23},
    {date: 24, tasks: "1 task\n1 hour", reminders: "2 reminders"},
    {date: 25},
    {date: 26, reminders: "4 reminders"},
    {date: 27, tasks: "5 tasks\n2 hours"},
    {date: 28, tasks: "2 tasks\n2 hours", reminders: "7 reminders"},
    {date: 29, tasks: "1 task\n1 hour"},
    {date: 30},
];

export function CalendarPlanner() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detectar si el dispositivo es móvil basado en el tamaño de la pantalla
        function handleResize() {
            setIsMobile(window.innerWidth <= 768); // Máximo ancho para móvil
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <MobileCalendar /> : <DesktopCalendar />;
}

function DesktopCalendar() {
    return (
            <div className="calendar calendar--desktop">
                <header className="calendar__header">
                    <CalendarNav title="Noviembre 2024" />
                    <ViewButtons />
                    <button className="calendar__btn--settings"><i className="fa fa-cog"></i></button>
                </header>
                <div className="calendar__weekdays">
                    {WEEKDAYS.map((day) => (
                            <div key={day}>{day}</div>
                    ))}
                </div>
                <div className="calendar__grid">
                    {DAYS.map(({ date, tasks, reminders }) => (
                            <CalendarDay
                                    key={date}
                                    date={date}
                                    tasks={tasks}
                                    reminders={reminders}
                            />
                    ))}
                </div>
            </div>
    );
}
function MobileCalendar() {
    return (
            <div className="calendar calendar--mobile">
                <header className="calendar__header">
                    <CalendarNav title="Noviembre 2024" />
                </header>
                <div className="calendar__list">
                    {DAYS.map(({ date, tasks, reminders }) => (
                            <MobileCalendarDay
                                    key={date}
                                    date={date}
                                    tasks={tasks}
                                    reminders={reminders}
                            />
                    ))}
                </div>
            </div>
    );
}


/* Componente de navegación */
function CalendarNav({ title }: { title: string }) {
    return (
            <div className="calendar__nav">
                <button className="calendar__btn calendar__btn--prev"><i className="fa fa-arrow-left"></i></button>
                <button className="calendar__btn calendar__btn--next"><i className="fa fa-arrow-right"></i></button>
                <h2 className="calendar__title">{title}</h2>
            </div>
    );
}

/* Botones de vista */
function ViewButtons() {
    const views = ["Día", "Semana", "Mes", "Año"];
    return (
            <div className="calendar__view">
                {views.map((view) => (
                        <button
                                key={view}
                                className={`calendar__view-btn ${
                                        view === "Mes" ? "calendar__view-btn--active" : ""
                                }`}
                        >
                            {view}
                        </button>
                ))}
            </div>
    );
}

/* Día en calendario de escritorio */
function CalendarDay({
                         date,
                         tasks,
                         reminders,
                     }: {
    date: number;
    tasks?: string;
    reminders?: string;
}) {
    return (
            <div className="calendar__day">
                <span className="calendar__date">{date}</span>
                {tasks && <div className="calendar__task">{tasks}</div>}
                {reminders && <div className="calendar__reminder">{reminders}</div>}
            </div>
    );
}

/* Día en vista móvil (lista compacta) */
function MobileCalendarDay({
                               date,
                               tasks,
                               reminders,
                           }: {
    date: number;
    tasks?: string;
    reminders?: string;
}) {
    return (
            <div className="calendar__list-item">
                <span className="calendar__date">Día {date}</span>
                {tasks && <div className="calendar__task">{tasks}</div>}
                {reminders && <div className="calendar__reminder">{reminders}</div>}
            </div>
    );
}