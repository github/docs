import fs from 'fs/promises'
import path from 'path'
import yaml from 'js-yaml'
import languages from './languages-server'

const cache: Record<string, any> = {}

export async function getAlertTitles(page: Record<string, any>) {
  const { languageCode } = page
  if (cache[languageCode]) return cache[languageCode]

  let file = ''
  let yamlFile: Record<string, any> = {}
  if (languageCode !== 'en') {
    try {
      const { dir } = languages[languageCode]
      file = await fs.readFile(path.join(dir, `data/ui.yml`), 'utf-8')
      yamlFile = yaml.load(file) as Record<string, any>
    } catch (e) {
      console.warn(`Failed to load translated alert titles`, e)
    }
  }
  if (!file || !yamlFile.alerts) {
    const { dir } = languages.en
    file = await fs.readFile(path.join(dir, `data/ui.yml`), 'utf-8')
    yamlFile = yaml.load(file) as Record<string, any>
  }

  cache[languageCode] = yamlFile.alerts
  return cache[languageCode]
}
