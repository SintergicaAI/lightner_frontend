import {postService} from "./adapters/api/services.service.ts";

export function initializeServicesForm(formElement: HTMLFormElement): void {
    // Helper to update input values
    const updateInputValue = (name: string, value: string): void => {
        formElement.querySelector<HTMLInputElement>(`[name="${name}"]`)?.setAttribute('value', value);
    };

    // Extract form data
    const getFormData = (form: HTMLFormElement) => ({
        username: form.db_username.value,
        password: form.db_password.value,
        connection: form.db_connection.value,
        image: form.image.value,
        tag: form.tag.value,
    });

    // Main function to set input values
    const setFormValues = (form: HTMLFormElement): void => {
        const {username, password, connection, image, tag} = getFormData(form);
        updateInputValue('db_username', username);
        updateInputValue('db_password', password);
        updateInputValue('db_connection', connection);
        updateInputValue('image', image);
        updateInputValue('tag', tag);


        console.log('Form values updated:', username, password, connection);
    };

    // Function to handle form submission and call createService
    const handleSubmit = async (event: SubmitEvent): Promise<void> => {
        event.preventDefault();
        const {username, password, connection, image, tag} = getFormData(formElement);

        console.log('Creating service:', username, password, connection, image, tag);

        try {
            const params = new URLSearchParams({image, tag, iport: '42001', eport: '42001', priviliged: '0'});
            
            // Call createService with form data
            const response = await postService(params, {
                DB_URL: connection,
                DB_USERNAME: username,
                DB_PASSWORD: password,
            });

            formElement.reset();

            console.log('Service created successfully:', response);
        } catch (error: unknown) {
            console.error('Error creating service:', (error as Error).message);
        }
    };

    // Attach submit event listener
    formElement.addEventListener('submit', handleSubmit);

    // Initialize the form values
    setFormValues(formElement);
}
