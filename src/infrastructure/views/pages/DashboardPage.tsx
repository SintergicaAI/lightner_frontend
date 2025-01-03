import React from "react"
import {CalendarPlanner} from "../components/Planner.tsx";

export async function clientLoader() {
    return {
        title: 'Dashboard',
    }
}

export default function DashboardPage({loaderData}: { loaderData: any }) {
    return (<>
        <header className="content__header">
            <nav className="breadcrumb">
                <ul className="breadcrumb__list">
                    <li className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link">Home</a>
                        <span className="breadcrumb__divider">&rarr;</span>
                    </li>
                    <li className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link">Productos</a>
                        <span className="breadcrumb__divider">&rarr;</span>
                    </li>
                    <li className="breadcrumb__item">
                        <a href="#" className="breadcrumb__link breadcrumb__link--active">Perfil</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div className="content__body">
            <div className="grid grid--gap-lg">

                <div className="dashboard__hero">
                    <div className="dashboard__hero-content">
                        <h1 className="dashboard__hero-title">¡Hola María!</h1>
                        <p className="dashboard__hero-subtitle">Cada no es un paso más cerca de un
                            sí.</p>
                    </div>
                </div>

            </div>

            <div className="grid grid--4cols-md-up grid--gap-lg">

                <article className="card">
                    <div className="card__header">
                        <h2 className="card__title">Title</h2>
                    </div>
                    <div>
                        <h3 className="card__description">$20.2617</h3>
                        <small className="card__description">5 nov, 16:48:00 UTC</small>
                    </div>
                    <div className="chip chip--trend-positive">
                        <i className="fas fa-arrow-up chip__icon"></i>
                        <span className="chip__text chip--trend-positive">Trending Upward</span>
                    </div>
                </article>
                <div className="card">
                    <h3 className="card__title">Sales Report</h3>
                    <p className="card__description">The sales have decreased significantly this
                        month.</p>
                    <div className="chip chip--trend-negative">
                        <i className="fas fa-arrow-down chip__icon"></i>
                        <span className="chip__text ">Trending Downward</span>
                    </div>
                </div>
                <div className="card">
                    <h3 className="card__title">Sales Report</h3>
                    <p className="card__description">The sales have increased significantly this
                        month.</p>
                    <div className="chip chip--trend-positive">
                        <i className="fas fa-arrow-up chip__icon"></i>
                        <span className="chip__text chip--trend-positive">Trending Upward</span>
                    </div>
                </div>
                <div className="card">
                    <h3 className="card__title">Sales Report</h3>
                    <p className="card__description">The sales have increased significantly this
                        month.</p>
                    <div className="chip chip--trend-positive">
                        <i className="fas fa-arrow-up chip__icon"></i>
                        <span className="chip__text chip--trend-positive">Trending Upward</span>
                    </div>
                </div>
            </div>

            <div className="grid grid--4cols-md-up">
                <div className="card">
                    <div id="calendar_component" className="calendar">

                        <p id="selectedDate"></p>
                    </div>
                </div>
                <div className="card">
                    <h3 className="card__title">Recordatorios</h3>
                </div>
                <div className="card">
                    <div className="calendar">
                        <div className="calendar__header">
                            <i className="fa fa-arrow-left "></i> <b id="current-month"
                                                                     data-month="November">November</b>, <b
                                id="current-year" data-year="2024">2024</b> <i
                                className="fa fa-arrow-right"></i>
                        </div>
                        <div className="calendar__body">
                            <div className="calendar__row calendar__row--header">
                                <div className="calendar__column">D</div>
                                <div className="calendar__column">L</div>
                                <div className="calendar__column">M</div>
                                <div className="calendar__column">X</div>
                                <div className="calendar__column">J</div>
                                <div className="calendar__column">V</div>
                                <div className="calendar__column">S</div>
                            </div>
                            <div className="calendar__row">
                                <div className="calendar__column calendar__day">1</div>
                                <div className="calendar__column calendar__day">2</div>
                                <div className="calendar__column calendar__day">3</div>
                                <div className="calendar__column calendar__day">4</div>
                                <div className="calendar__column calendar__day">5</div>
                                <div className="calendar__column calendar__day">6</div>
                                <div className="calendar__column calendar__day">7</div>
                            </div>
                            <div className="calendar__row">
                                <div className="calendar__column calendar__day">8</div>
                                <div className="calendar__column calendar__day">9</div>
                                <div className="calendar__column calendar__day">10</div>
                                <div className="calendar__column calendar__day">11</div>
                                <div className="calendar__column calendar__day">12</div>
                                <div className="calendar__column calendar__day">13</div>
                                <div className="calendar__column calendar__day">14</div>
                            </div>
                            <div className="calendar__row">
                                <div className="calendar__column calendar__day">15</div>
                                <div className="calendar__column calendar__day">16</div>
                                <div className="calendar__column calendar__day">17</div>
                                <div className="calendar__column calendar__day">18</div>
                                <div className="calendar__column calendar__day">19</div>
                                <div className="calendar__column calendar__day">20</div>
                                <div className="calendar__column calendar__day">21</div>
                            </div>
                            <div className="calendar__row">
                                <div className="calendar__column calendar__day">22</div>
                                <div className="calendar__column calendar__day">23</div>
                                <div className="calendar__column calendar__day">24</div>
                                <div className="calendar__column calendar__day">25</div>
                                <div className="calendar__column calendar__day">26</div>
                                <div className="calendar__column calendar__day">27</div>
                                <div className="calendar__column calendar__day">28</div>
                            </div>
                            <div className="calendar__row">
                                <div className="calendar__column calendar__day">29</div>
                                <div className="calendar__column calendar__day">30</div>
                                <div className="calendar__column"></div>
                                <div className="calendar__column"></div>
                                <div className="calendar__column"></div>
                                <div className="calendar__column"></div>
                                <div className="calendar__column"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card">
                <div className="chip chip--primary">
                    <span className="chip__text">Primary</span>
                    <button className="chip__button">&times;</button>
                </div>

                <div className="chip chip--secondary">
                    <span className="chip__text">Secondary</span>
                    <button className="chip__button">&times;</button>
                </div>

                <div className="chip chip--success">
                    <span className="chip__text">Success</span>
                    <button className="chip__button">&times;</button>
                </div>
            </div>


            <article className="card">
                <h2>Card Title</h2>
                <p>This is a simple card with text to show you how cards look like. You can place any
                    content here such as
                    text, images, lists, etc.</p>
            </article>

            <article className="grid grid--4cols">
                <div className="card grid--span-1">
                    <h2>Card Title</h2>
                    <p>This is a simple card with text to show you how cards look like. You can place any
                        content here such as
                    </p>
                </div>
                <div className="card grid--span-3">
                    <CalendarPlanner/>
                </div>


            </article>
            <div className="grid grid--2cols">


            </div>

        </div>
    </>)

}