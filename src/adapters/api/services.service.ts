import {MichelleResponse} from "./michelleResponse.ts";

const BASE_URL = import.meta.env.VITE_ANTONE_HOST;
const SERVICE_ENDPOINT = 'service';
const HEADERS = {'Content-Type': 'application/json'};

// Define type for payload
interface ServicePayload {
    DB_URL: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
}

// Helper function to handle fetch response
const handleResponse = async (response: Response): Promise<MichelleResponse> => {
    const michelleResponse =  new MichelleResponse(response);
    return await michelleResponse.parseBody();
};

// Helper function to build URL
const buildUrl = (params?: URLSearchParams): string => {
    const url = `${BASE_URL}${SERVICE_ENDPOINT}`;
    return params ? `${url}?${params.toString()}` : url;
};

export const fetchService = async (): Promise<string> => {
    try {
        const url = buildUrl();
        const response = await fetch(url);
        const data = await handleResponse(response);
        return `Servidor respondió: ${data}`;
    } catch (error: any) {
        return `Error al llamar al servidor: ${error.message}`;
    }
};

export const postService = async (params: URLSearchParams, payload: ServicePayload): Promise<string> => {
    try {
        const url = buildUrl(params);
        const response = await fetch(url, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(payload),
        });
        const data = await handleResponse(response);
        return `Servidor respondió: ${data}`;
    } catch (error: any) {
        return `Error al llamar al servidor: ${error.message}`;
    }
};