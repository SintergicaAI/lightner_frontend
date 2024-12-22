import {Button} from "../components/Button";
import registerTemplate from "../templates/register.html?raw";
import {TextField} from "../components/TextField.ts";
import {UserApiRepository} from "../../../adapters/api/UserApiRepository.ts";
import {RegisterUser} from "../../../domain/user_cases/RegisterUser.ts";
export function RegisterPage(): void {
    const app = document.getElementById("app");
    if (!app) throw new Error("Elemento 'app' no encontrado");
    app.innerHTML = registerTemplate;

    const form = document.getElementById("register-form") as HTMLFormElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const emailField = TextField({
        label: "Email", placeholder: "example@email.com", className: "textfield-primary",
        validator: (value) => {
            if (!value.includes("@")) return "El email debe incluir @";
            return null;
        },
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        const userRepository = new UserApiRepository();
        const registerUser = new RegisterUser(userRepository);

        try {
            const user = await registerUser.execute(email, password);
            alert(`Usuario ${user.email} registrado con exito`);

        } catch (error: any) {
            alert(error.message);
        }
    });

    const button = Button("Extra Button", () => alert("¡Hiciste clic en el botón!"));
    app.appendChild(button);
    app.appendChild(emailField);
}