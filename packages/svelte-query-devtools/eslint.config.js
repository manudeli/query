// @ts-check

import pluginSvelte from 'eslint-plugin-svelte'
import rootConfig from '../../eslint.config.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...rootConfig,
  ...pluginSvelte.configs['flat/recommended'],
  {
    rules: {
      'svelte/block-lang': ['error', { script: ['ts'] }],
      'svelte/no-svelte-internal': 'error',
      'svelte/valid-compile': 'off',
    },
  },
]
