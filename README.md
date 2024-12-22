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

### **Estructura del Proyecto**
``` plaintext
src/
  ├── domain/                     # Lógica y reglas de negocio (Domino puro)
  │
  ├── application/                # Casos de uso y lógica de aplicación
  │
  ├── adapters/                   # Adaptadores hacia APIs, almacenamiento, etc.
  │
  ├── infrastructure/             # Infraestructura (lógica visual y otros componentes relacionados)
  │   ├── views/                  # Archivos relacionados con la parte visual
  │   │   ├── components/         # Componentes visuales reutilizables
  │   │   │   └── Button.ts       # Componente para un botón reutilizable
  │   │   │   └── TextField.ts    # Componente para inputs tipo TextField
  │   │   │
  │   │   ├── pages/              # Estructura de las vistas principales (páginas de la app)
  │   │   │   └── RegisterPage.ts # Página de ejemplo: Registro de usuario
  │   │   │
  │   │   └── templates/          # Plantillas HTML reutilizables
  │   │       └── register.html   # Plantilla HTML para el formulario de registro
  │   │
  │   ├── css/                    # Estilos globales y específicos (puedes usar CSS o preprocesadores)
  │   │   ├── styles.css          # Estilos globales del proyecto
  │   │   ├── textfield.css       # Estilos del componente TextField
  │   │   └── button.css          # (Opcional) Estilos para el botón, si fueran necesarios
  │   │
  │   └── scripts/                # Scripts reutilizables/utilidades generales
  │       └── helpers.ts          # Helpers o funciones auxiliares
  │
  ├── main.ts                     # Punto de entrada principal del proyecto
  │
  └── index.html                  # HTML base del proyecto
```
### **Descripción de los Directorios**
#### 1. **`src/domain/`**
En este directorio se encuentra toda la lógica pura del dominio. Aquí defines entidades, objetos de valor y reglas de negocio que son independientes de cualquier capa de infraestructura o tecnología.
#### 2. **`src/application/`**
Contiene los **casos de uso**, es decir, toda la lógica de aplicación que conecta la lógica del dominio con las herramientas disponibles en la infraestructura. Esta capa define cómo los usuarios interactúan con el sistema.
#### 3. **`src/adapters/`**
Incluye adaptadores para interactuar con recursos externos (APIs, bases de datos, etc.). Promueve desacoplamiento y separa la responsabilidad de manejar datos externos desde el resto del sistema.
#### 4. **`src/infrastructure/`**
Aquí se encuentra toda la implementación de la interfaz de usuario (frontend) y otros elementos específicos relacionados con la infraestructura:
- **`views/components/`:** Contiene los componentes visuales reutilizables (por ejemplo, `Button` y `TextField`).
    - El componente **`TextField.ts` **es un input modular que soporta:
        - Etiquetas flotantes.
        - Validación dinámica.
        - Clases dinámicas (`className`).
        - Estilos dinámicos con `wrapperStyles`.

- **`views/pages/`:** Define las páginas principales de la aplicación, como la página de registro o cualquier otra vista que presente al usuario componentes estructurados.
- **`views/templates/`:** Contiene plantillas HTML reutilizables que pueden ser inyectadas dinámicamente en las vistas.
- **`css/`:** Archivos CSS (globales y/o específicos) que manejan los estilos de la aplicación.
    - **`styles.css`**: Estilos generales para toda la aplicación.
    - **`textfield.css`**: Estilos específicos para el componente `TextField`.

- **`scripts/`:** Scripts generales que pueden ser reutilizados o compartidos en distintas partes del proyecto.

#### 5. **`main.ts`**
Archivo principal del proyecto. Este es el punto de entrada donde se inicializa la aplicación, renderizando páginas o vistas según sea necesario.
#### 6. **`index.html`**
Archivo HTML base que contiene un contenedor principal (e.g., `<div id="app"></div>`). Todas las vistas se renderizan dinámicamente dentro de este contenedor usando JavaScript.
### **Flujo de Renderizado**
1. El archivo `main.ts` es el **punto de entrada** del sistema:
    - Importa páginas, componentes y estilos.
    - Al cargar el DOM (`DOMContentLoaded`), renderiza la página inicial, como `RegisterPage`.

2. La **parte visual** del proyecto está dividida en componentes (`components`) y páginas (`pages`):
    - Un componente como `TextField` puede ser reutilizado en cualquier página.
    - Las páginas (e.g., `RegisterPage`) combinan componentes y lógica para crear vistas completas.

3. El diseño o estructura general está gestionado por:
    - **Plantillas HTML (`templates`)**, para vistas reutilizables.
    - **CSS (`css`)**, que define los estilos globales y específicos.

4. Todo el proyecto sigue principios de **Clean Architecture**, separando responsabilidades entre dominio, aplicación e infraestructura.
