// src/infrastructure/views/components/Button.ts
export function Button(text: string, onClick: () => void): HTMLElement {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = "custom-button"; // Puedes enlazar esto con un CSS específico
    button.addEventListener("click", onClick);
    return button;
}