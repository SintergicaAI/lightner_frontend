import React from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

export default function AuthLayout() {
    return (
            <div className="layout">
                <aside id="sidebar" className="sidebar">
                    <a href="/"><img src="src/infrastructure/assets/img/solarfyhub_isotipo.png" alt="SolarfyHUB"/></a>
                    <nav>
                        <Link to="/home" className="nav__link"><i className="fas fa-home nav__icon"></i></Link>
                        <Link to="/dashboard" className="nav__link"><i
                                className="fas fa-chart-column nav__icon"></i></Link>
                        <a href="#services" className="nav__link"><i className="fas fa-money-bill nav__icon"></i></a>
                        <a href="#services" className="nav__link"><i className="fas fa-calendar nav__icon"></i></a>
                        <a href="#about" className="nav__link"><i className="fas fa-solar-panel nav__icon"></i></a>
                        <a href="#contact" className="nav__link"><i className="fas fa-user-group nav__icon"></i></a>
                        <Link to="/michelle" className="nav__link"><i className="fas fa-code nav__icon"></i></Link>
                    </nav>
                </aside>
                <div id="lightner-content" className="content">
                    <header className="header">
                        <button id="header__hamburger" className="header__hamburger">☰</button>
                        <div className="user-menu">
                            <div className="user-info">
                                <img src="https://www.gravatar.com/avatar/?d=mp" alt="User"/>
                                <p className="user-info__content">
                                    <span>María José</span>
                                    <span>Admin</span>
                                </p>
                            </div>
                            <div className="user-dropdown">
                                <a href="#profile">My Profile</a>
                                <a href="#settings">Settings</a>
                                <a href="#logout">Logout</a>
                            </div>
                        </div>
                    </header>
                    <main className="content__main">
                        <Outlet />
                    </main>
                    <button id="sidebar__toggle" className="sidebar__toggle">☰</button>
                </div>
            </div>
    );
}