import fs from 'fs/promises'
import path from 'path'
import yaml from 'js-yaml'
import { createLogger } from '@/observability/logger'
import languages from './languages-server'

const logger = createLogger(import.meta.url)

interface AlertTitles {
  [key: string]: string
}

interface UiYaml {
  alerts?: AlertTitles
  [key: string]: unknown
}

const cache: Record<string, AlertTitles> = {}

export async function getAlertTitles(page: { languageCode: string }) {
  const { languageCode } = page
  if (cache[languageCode]) return cache[languageCode]

  let file = ''
  let yamlFile: UiYaml = {}
  if (languageCode !== 'en') {
    try {
      const { dir } = languages[languageCode]
      file = await fs.readFile(path.join(dir, `data/ui.yml`), 'utf-8')
      yamlFile = yaml.load(file) as UiYaml
    } catch (e) {
      logger.warn('Failed to load translated alert titles', { error: e, languageCode })
    }
  }
  if (!file || !yamlFile.alerts) {
    const { dir } = languages.en
    file = await fs.readFile(path.join(dir, `data/ui.yml`), 'utf-8')
    yamlFile = yaml.load(file) as UiYaml
  }

  cache[languageCode] = yamlFile.alerts ?? {}
  return cache[languageCode]
}
