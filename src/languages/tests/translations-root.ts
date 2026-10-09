import path from 'path'

import { afterEach, describe, expect, test, vi } from 'vitest'

// Simulate a .env file: dotenv.config() sets the variables only when
// languages-server.ts calls it, after constants.ts has already loaded.
vi.mock('dotenv', () => ({
  default: {
    config: () => {
      vi.stubEnv('TRANSLATIONS_ROOT', '/from-dotenv')
      vi.stubEnv('ENABLED_LANGUAGES', 'all')
    },
  },
}))

describe('languages-server', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  test('uses TRANSLATIONS_ROOT from .env', async () => {
    vi.stubEnv('TRANSLATIONS_ROOT', '')
    vi.stubEnv('TRANSLATIONS_FIXTURE_ROOT', '')
    vi.resetModules()

    const { default: languages } = await import('@/languages/lib/languages-server')

    expect(languages.es.dir).toBe(path.join('/from-dotenv', 'es-es'))
  })
})
