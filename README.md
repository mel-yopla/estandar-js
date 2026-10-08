# Estandar JS

Este proyecto es una configuración base para mantener un código limpio, consistente y profesional utilizando **ESLint**, **Prettier** y **neostandard**.

## Características

- **ESLint**: Configurado con `neostandard` para seguir las mejores prácticas de JavaScript moderno.
- **Prettier**: Integrado para el formateo automático de código.
- **Configuración modular**: Uso de `eslint.config.mjs` (Flat Config).

## Requisitos

- Node.js instalado.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Comandos disponibles

- `npm run lint`: Ejecuta ESLint para verificar la calidad y estilo del código en todo el proyecto.

## Estructura del proyecto

- `index.js`: Archivo principal con ejemplos de código.
- `eslint.config.mjs`: Configuración de las reglas de linting.
- `.prettierrc`: Reglas de estilo para Prettier (comillas simples, punto y coma, etc.).
- `package.json`: Gestión de dependencias y scripts.
