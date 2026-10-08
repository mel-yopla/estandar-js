import neostandard from 'neostandard';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // 1. Tus reglas base de linting (en tu caso, neostandard)
  ...neostandard(),

  // 2. La integración de Prettier (Debe ir SIEMPRE al final)
  eslintPluginPrettierRecommended,
];
