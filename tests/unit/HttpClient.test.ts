import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HttpClient } from '../../src/adapters/api/HttpClient'; // Importa la clase creada

describe('HttpClient', () => {
    let httpClient: HttpClient;
    const mockBaseUrl = 'https://api.example.com';

    beforeEach(() => {
        httpClient = new HttpClient(mockBaseUrl);
        global.fetch = vi.fn();
    });

    it('debería realizar una solicitud GET exitosa', async () => {
        const mockResponseData = { message: 'Json message' };

        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            status: 200,
            headers: { get: () => 'application/json' },
            json: async () => mockResponseData,
        });

        const response = await httpClient.get('/test-endpoint');

        expect(fetch).toHaveBeenCalledWith(
            `${mockBaseUrl}/test-endpoint`,
            expect.objectContaining({ method: 'GET' })
        );
        expect(response).toEqual(mockResponseData);
    });

    it('debería realizar una solicitud POST exitosa', async () => {
        const mockRequestData = { name: 'John Doe' };
        const mockResponseData = { id: 1, name: 'John Doe' };

        // Simula una respuesta exitosa del servidor
        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            status: 201,
            headers: { get: () => 'application/json' },
            json: async () => mockResponseData,
        });

        const response = await httpClient.post('/test-endpoint', mockRequestData);

        expect(fetch).toHaveBeenCalledWith(
            `${mockBaseUrl}/test-endpoint`,
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mockRequestData),
            })
        );
        expect(response).toEqual(mockResponseData);
    });

    it('debería realizar una solicitud DELETE exitosa', async () => {
        const mockResponseData = { success: true };

        // Simula que la solicitud DELETE es exitosa
        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            status: 204,
            headers: { get: () => 'application/json' },
            json: async () => mockResponseData,
        });

        const response = await httpClient.delete('/test-endpoint');

        expect(fetch).toHaveBeenCalledWith(
            `${mockBaseUrl}/test-endpoint`,
            expect.objectContaining({ method: 'DELETE' })
        );
        expect(response).toEqual({}); // DELETE con status 204 debería devolver un objeto vacío
    });

    it('debería manejar un error 404 correctamente', async () => {
        (global.fetch as any).mockResolvedValueOnce({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        });

        await expect(httpClient.get('/non-existent-endpoint')).rejects.toThrow(
            'Client Error: 404 Not Found'
        );

        expect(fetch).toHaveBeenCalledWith(
            `${mockBaseUrl}/non-existent-endpoint`,
            expect.objectContaining({ method: 'GET' })
        );
    });

    it('debería manejar un error 500 correctamente', async () => {
        (global.fetch as any).mockResolvedValueOnce({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        });

        await expect(httpClient.get('/server-error')).rejects.toThrow(
            'Server Error: 500 Internal Server Error'
        );

        expect(fetch).toHaveBeenCalledWith(
            `${mockBaseUrl}/server-error`,
            expect.objectContaining({ method: 'GET' })
        );
    });

    it('debería agregar parámetros de consulta a la URL en una solicitud GET', async () => {
        const mockResponseData: Record<string, any> = { success: true };

        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            status: 200,
            headers: { get: () => 'application/json' },
            json: async () => mockResponseData,
        });

        const queryParams = { search: 'vitest', page: 1 };
        const response = await httpClient.get('/test-endpoint', queryParams);

        expect(fetch).toHaveBeenCalledWith(
            `${mockBaseUrl}/test-endpoint?search=vitest&page=1`,
            expect.objectContaining({ method: 'GET' })
        );
        expect(response).toEqual(mockResponseData);
    });

    it('debería manejar un timeout en una solicitud GET', async () => {
        // Mock de AbortController y fetch
        const mockAbortController = {
            signal: {},
            abort: vi.fn(), // Simula la función abort
        };
        global.AbortController = vi.fn(() => mockAbortController as any);

        // Simula que fetch lanza un AbortError
        (global.fetch as any).mockImplementationOnce(() => {
            return new Promise((_resolve, reject) => {
                // Rechaza la promesa cuando fetch es abortado
                setTimeout(() => {
                    const error = new Error('Aborted') as any;
                    error.name = 'AbortError'; // Este nombre identifica el timeout abortado
                    reject(error);
                }, 1000); // Se ejecuta después del tiempo límite
            });
        });

        // La solicitud debería rechazar como un AbortError
        await expect(httpClient.get('/timeout-endpoint', undefined, 1000)).rejects.toThrow(
            'Timeout: La solicitud tardó demasiado y fue cancelada.'
        );

        // Verifica que se llamó a abort en el controlador
        expect(mockAbortController.abort).toHaveBeenCalled();
    });

    it('debería manejar diferentes tipos de contenido en las respuestas', async () => {
        // Caso JSON
        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            status: 200,
            headers: { get: () => 'application/json' },
            json: async () => ({ success: true }),
        });

        const jsonResponse = await httpClient.get('/json-endpoint');
        expect(jsonResponse).toEqual({ success: true });

        // Caso texto plano
        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            status: 200,
            headers: { get: () => 'text/plain' },
            text: async () => 'Texto plano',
        });

        const textResponse = await httpClient.get('/text-endpoint');
        expect(textResponse).toBe('Texto plano');

        // Caso binario
        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            status: 200,
            headers: { get: () => 'application/octet-stream' },
            arrayBuffer: async () => new ArrayBuffer(8),
        });

        const binaryResponse = await httpClient.get('/binary-endpoint');
        expect(binaryResponse).toBeInstanceOf(ArrayBuffer);
    });
});