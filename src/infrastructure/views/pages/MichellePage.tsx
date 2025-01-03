import React from "react";

export default function MichellePage() {
    return (
            <article className="card">
                <div className="service">
                    <div>
                        <img src="/src/infrastructure/assets/img/michelle.svg" width="400" height="200"
                             alt="MICHELLE Logo"/>
                    </div>
                    <form id="form" className="form ">
                        <div className="form form__group">
                            <fieldset className="form form__group">
                                <legend>Package</legend>
                                <label htmlFor="package_name" className="form__label">Name:</label>
                                <input type="text" id="package_name" className="form__input" name="package_name"
                                       placeholder="Seleccione un paquete"/>
                                <div className="form__select-wrapper">
                                    <label htmlFor="tags" className="form__label">Tag:</label>
                                    <label htmlFor="autocomplete-input"></label><input type="text"
                                                                                       className="form__input"
                                                                                       id="autocomplete-input"
                                                                                       name="tag" list="tags"
                                                                                       placeholder="Seleccione una etiqueta"/>
                                    <datalist id="tags">
                                        <option value="latest"></option>
                                        <option value="v1"></option>
                                        <option value="v2"></option>
                                        <option value="feature"></option>
                                        <option value="v3"></option>
                                    </datalist>
                                </div>
                            </fieldset>
                        </div>
                        <hr/>
                        <div className="form form__group">
                            <fieldset className="form form__group">
                                <legend>Configuration</legend>
                                <label htmlFor="db_connection" className="form__label">Database string
                                    connection:</label>
                                <input id="db_connection" type="text" className="form__input" name="db_connection"
                                       placeholder="Database string connection"/>
                                <label htmlFor="db_username" className="form__label">Username:</label>
                                <input id="db_username" type="text" className="form__input" name="db_username"
                                       placeholder="Database username"/>
                                <label htmlFor="db_password" className="form__label">Password:</label>
                                <input id="db_password" type="password" className="form__input" name="db_password"/>

                                <label htmlFor="pkg_external_port" className="form__label">External port</label>
                                <input id="pkg_external_port" type="text" className="form__input"
                                       name="pkg_external_port" placeholder="Ej: 42001, 42002, etc."/>
                                <label htmlFor="pkg_internal_port" className="form__label">Internal port</label>
                                <input id="pkg_internal_port" type="text" className="form__input"
                                       name="pkg_internal_port" placeholder="Ej: 42001, 42002, etc."/>
                            </fieldset>
                        </div>
                        <button style={{ backgroundColor: "#242424", color: "#f9f9f9" }} type="submit">Enviar</button>
                        <button id="counter" type="button"></button>

                        <button id="ping-button">Hacer Ping</button>

                    </form>
                </div>
            </article>
    )
}