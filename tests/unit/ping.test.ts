import { describe, it, expect, vi } from 'vitest';
import {ping} from "../../src/adapters/api/ping";


describe('ping function', () => {
    it('should return "pong" if the server responds successfully', async () => {
        // Fakeamos una respuesta exitosa utilizando Vitest (mock de fetch)
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => 'pong'

            })
        ) as unknown as typeof fetch;

        const result = await ping();
        expect(result).toBe('pong'); // La función debe responder con pong
    });

    it('should return "error" if the server responds with an error', async () => {
        // Simulamos una respuesta con error
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
            })
        ) as unknown as typeof fetch;

        const result = await ping();
        expect(result).toBe('error'); // Debe responder "error"
    });

    it('should return "error" if fetch throws an error', async () => {
        // Simulamos un error en la llamada
        global.fetch = vi.fn(() =>
            Promise.reject(new Error('Network error'))
        ) as unknown as typeof fetch;

        const result = await ping();
        expect(result).toBe('error'); // Debe manejar el error y responder "error"
    });
});