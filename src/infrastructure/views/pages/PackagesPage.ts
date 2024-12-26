import servicesTemplate from "../templates/service.html?raw"; // Import the template as text without processing
import {setupCounter} from "../components/counter.ts";
import {initializeServicesForm} from "../../../services.form.ts";
import {ping} from "../../../adapters/api/ping.ts";


export function PackagesPage(): void {

    const app = document.getElementById("lightner-content");
    if (!app) throw new Error("Elemento 'app' no encontrado")
    app.innerHTML = servicesTemplate;
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


    const pingButton = document.querySelector<HTMLButtonElement>('#ping-button');
    if (pingButton) {
        pingButton.addEventListener('click', async () => {
            const result = await ping();
            console.log(result);
        });
    }

    initializeServicesForm(document.querySelector<HTMLFormElement>('#form')!)
}