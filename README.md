Configurar las variables de entorno:

1. Configurar Node.js si no está instalado:
    - Descargar e instalar Node.js desde la [página oficial de Node.js](https://nodejs.org).
    - Comprobar que Node.js está instalado ejecutando el siguiente comando en la terminal:
      ```bash
      node -v
      ```
    - Comprobar que npm está instalado ejecutando el siguiente comando:
      ```bash
      npm -v
      ```

2. Crear un archivo llamado `.env` en la raíz del proyecto y colocar las credenciales correspondientes.
   Ejemplo de archivo `.env`:
   ```env
   # Configuración del entorno 
    VITE_API_HOST=
    VITE_ANTONE_HOST=
    VITE_MICHELLE_HOST= 
   ```

3. Instalar las dependencias necesarias del proyecto:
   ```bash
   npm install
   ```

4. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Ejecutar las pruebas del proyecto (opcional):
   ```bash
   npm test
   ```

6. Configurar los linters y herramientas de análisis de código:
   ```bash
   npm run lint
   ```

7. Leer el archivo README.md ubicado en la raíz del proyecto para obtener más detalles sobre las funcionalidades y las
   instrucciones adicionales de configuración.

