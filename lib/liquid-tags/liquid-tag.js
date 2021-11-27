import { fileURLToPath } from 'url'
import path from 'path'
import readFileAsync from '../readfile-async.js'
import Liquid from 'liquid'
import { paramCase } from 'change-case'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default class LiquidTag extends Liquid.Tag {
  constructor(template, tagName, param) {
    super()
    this.param = param
    this.tagName = tagName
    this.templatePath = path.join(
      __dirname,
      `../../includes/liquid-tags/${paramCase(this.constructor.name)}.html`
    )
    this.template = null
    return this
  }

  async render(context) {
    return this.parseTemplate(context)
  }

  async getTemplate() {
    if (!this.template) {
      this.template = await readFileAsync(this.templatePath, 'utf8')
      this.template = this.template.replace(/\r/g, '')
    }

    return this.template
  }
}
