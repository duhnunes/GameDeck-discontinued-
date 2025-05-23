import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImport from 'eslint-plugin-simple-import-sort'
import esprettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['dist', 'dist-react', 'dist-electron'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      esprettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImport,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Additional rules
      'simple-import-sort/imports': 'error',
      'prettier/prettier': 'error',
    },
  }
)
