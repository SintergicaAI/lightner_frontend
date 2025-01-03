import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import path from 'path';
import { reactRouter } from "@react-router/dev/vite"
// Exporta la configuración usando la función `defineConfig`
export default defineConfig({
    plugins: [reactRouter()],
    resolve: {
      alias: {
          "@": path.resolve(__dirname, "./src"),
      }
    },
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