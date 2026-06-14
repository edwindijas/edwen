import rootConfig from '../eslint.config.mjs'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([...rootConfig])