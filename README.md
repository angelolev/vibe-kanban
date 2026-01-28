# Kanban Test

Aplicación de tablero Kanban construida con React, TypeScript y Vite, utilizando TanStack Router para el enrutamiento.

## Tecnologías y Herramientas

### Core
- **[React](https://react.dev/)** (v19.2.0) - Librería de UI para construir interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** (v5.9.3) - Superset de JavaScript con tipado estático
- **[Vite](https://vite.dev/)** (v7.2.4) - Build tool y servidor de desarrollo de alta velocidad

### Routing
- **[@tanstack/react-router](https://tanstack.com/router)** (v1.157.16) - Router type-safe para React
- **[@tanstack/router-devtools](https://tanstack.com/router)** (v1.157.16) - Herramientas de desarrollo para TanStack Router
- **[@tanstack/router-plugin](https://tanstack.com/router)** (v1.157.16) - Plugin de Vite para TanStack Router

### Calidad de Código
- **[ESLint](https://eslint.org/)** (v9.39.1) - Linter para identificar y reportar patrones en JavaScript/TypeScript
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** (v7.0.1) - Reglas de ESLint para React Hooks
- **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)** (v0.4.24) - Validación para React Fast Refresh
- **[typescript-eslint](https://typescript-eslint.io/)** (v8.46.4) - Parser y plugin de ESLint para TypeScript

### Build & Plugins
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** (v5.1.1) - Plugin oficial de Vite para React con Fast Refresh usando Babel

## Requisitos Previos

- Node.js (versión 18 o superior recomendada)
- npm, yarn o pnpm

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio del proyecto
cd kanban-test

# Instalar dependencias
npm install
```

## Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar TypeScript y construir para producción
npm run build

# Ejecutar el linter
npm run lint

# Previsualizar build de producción
npm run preview
```

## Estructura del Proyecto

```
kanban-test/
├── src/                    # Código fuente
│   ├── routes/            # Rutas de la aplicación (TanStack Router)
│   ├── components/        # Componentes React
│   └── ...
├── public/                # Archivos estáticos
├── dist/                  # Build de producción (generado)
├── index.html            # Punto de entrada HTML
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias y scripts
```

## Configuración de TypeScript

El proyecto utiliza dos archivos de configuración de TypeScript:
- `tsconfig.app.json` - Configuración para el código de la aplicación
- `tsconfig.node.json` - Configuración para scripts de Node.js y configuración de Vite

## Características

- ⚡ Hot Module Replacement (HMR) con Vite
- 🔒 Type-safe routing con TanStack Router
- 📝 TypeScript para type safety en todo el proyecto
- 🎨 React 19 con las últimas características
- 🔍 ESLint configurado para calidad de código
- 🚀 Build optimizado para producción

## Desarrollo

### Fast Refresh

El proyecto utiliza [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) que usa Babel para Fast Refresh, permitiendo ver cambios instantáneamente sin perder el estado de la aplicación.

### Router DevTools

TanStack Router DevTools está incluido en modo desarrollo para facilitar la depuración del routing y navegación.

## Expanding ESLint Configuration

Si estás desarrollando una aplicación de producción, se recomienda actualizar la configuración para habilitar reglas de lint type-aware:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // O para reglas más estrictas
      tseslint.configs.strictTypeChecked,
      // Opcionalmente, para reglas de estilo
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## Licencia

[Especificar licencia del proyecto]

## Contribuir

[Agregar guías de contribución si aplica]
