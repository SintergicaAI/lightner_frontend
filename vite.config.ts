import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

// Exporta la configuración usando la función `defineConfig`
export default defineConfig({
    server: {
        port: 3000, // Cambia si necesitas otro puerto
    },
    test: {
        include: ['tests/**/*.test.ts'],
        globals: true, // Permite usar funciones globales como describe, test, expect
        environment: 'jsdom', // Simula un entorno DOM para pruebas frontend
        exclude: [...configDefaults.exclude, '**/e2e/**'], // Opcionalmente excluye pruebas E2E
        coverage: {
            reporter: ['text', 'json', 'html'], // Configuración para reporte de cobertura
        }
    }

});