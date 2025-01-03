import React from "react";
import './LoginPage.css';

export default function LoginPage() {
    return (
            <>
                <div className="login">
                    <div className="login__header">
                        <img src="/src/infrastructure/assets/img/SolarfyHUB.png" alt="Logo SolarifyHub"
                             className="login__logo"/>
                    </div>
                    <div className="login__container">
                        <form className="login__form" action="/dashboard" method="POST">
                            <h1 className="login__title">¡Bienvenido!</h1>
                            <div className="login__field">
                                <input type="email" className="login__input" placeholder="Correo electrónico..."
                                       required/>
                            </div>
                            <div className="login__field">
                                <input type="password" className="login__input" placeholder="Contraseña..." required/>
                            </div>
                            <a href="#" className="login__forgot">¿Olvidaste tu contraseña?</a>
                            <button type="submit" className="login__button">Ingresar</button>
                            <p className="login__terms">
                                <a href="#">Términos de uso</a> | <a href="#">Política de privacidad</a>
                            </p>
                        </form>
                        <img src="/src/infrastructure/assets/img/girl.png" alt="Ilustración"
                             className="login__illustration"/>
                    </div>

                </div>
                <div className="wave">
                    <img src="/src/infrastructure/assets/img/wave.svg" alt="Wave" className="wave__img"/>

                </div>
            </>

    )
}