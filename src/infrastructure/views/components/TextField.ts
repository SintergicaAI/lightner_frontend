interface TextFieldOptions {
    label: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onInput?: (value: string) => void;
    validator?: (value: string) => string | null;
    className?: string;
    inputClassName?: string;
    wrapperStyles?: Partial<CSSStyleDeclaration>;
}

export function TextField(options: TextFieldOptions): HTMLElement {
    const {
        label,
        placeholder = "",
        type = "text",
        value = "",
        onInput,
        validator,
        className = "",
        inputClassName = "",
        wrapperStyles = {},
    } = options;

    const wrapper = document.createElement("div");
    wrapper.className = `textfield-wrapper ${className}`;
    Object.assign(wrapper.style, wrapperStyles);

    const input = document.createElement("input");
    input.className = `form__input ${inputClassName}`;
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;

    const inputLabel = document.createElement("label");
    inputLabel.className = "textfield-label";
    inputLabel.textContent = label;

    const errorMessage = document.createElement("div");
    errorMessage.className = "textfield-error";

    input.addEventListener("input", () => {
        const currentValue = input.value;

        if (onInput) {
            onInput(currentValue);
        }

        if (validator) {
            const error = validator(currentValue);
            errorMessage.textContent = error || "";
            if (error) {
                wrapper.classList.add("textfield-error-active");
            } else {
                wrapper.classList.remove("textfield-error-active");
            }
        }
    });

    wrapper.appendChild(input);
    wrapper.appendChild(inputLabel);
    wrapper.appendChild(errorMessage);

    return wrapper;
}