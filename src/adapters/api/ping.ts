export async function ping(): Promise<string> {
    try {
        const host = import.meta.env.VITE_API_HOST;
        const endpoint = 'user'
        const url = `${host}${endpoint}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error. Status: ${response.status}`);
        }
        const data = await response.text();
        return `Servidor respondió: ${data}`;
    } catch (error: any) {
        return `Error al llamar al servidor: ${error.message}`;
    }
}