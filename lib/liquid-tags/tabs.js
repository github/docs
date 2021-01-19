const Liquid = require('liquid')
const renderContent = require('../render-content/renderContent')
//const path = require('path')
const slugger = new (require('github-slugger'))()
const assert = require('assert')

const SyntaxHelp = "Syntax Error in tag 'tabs' - Valid syntax: tabs [group]"
const TabSyntaxHelp = "Syntax Error in tag 'tab' - Valid syntax: tab [title]"
const Syntax = /"([^"]+)"|'([^']+)'/

// TODO: Re-use code for templating? Or inline as string? Also see below.
//const LiquidTag = require('./liquid-tag')

module.exports = class Tabs extends Liquid.Block {
  constructor (template, tagName, markup) {
    super(template, tagName, markup)
    const match = Syntax.exec(markup)
    if (!match || !match[1]) {
      throw new Liquid.SyntaxError(SyntaxHelp)
    }
    slugger.reset()
    this.group = slugger.slug(match[1])
    this.tabs = []
  }

  unknownTag (tag, markup) {
    if (tag === 'tab') {
      return this.pushBlock(tag, markup)
    } else {
      return super.unknownTag(tag, markup)
    }
  }

  async pushBlock (tag, markup) {
    //const tab = Liquid.Helpers.scan(markup, Syntax)
    const match = Syntax.exec(markup)
    if (!match || !match[1]) {
        throw new Liquid.SyntaxError(TabSyntaxHelp)
    }
    const tabTitle = match[1]
    slugger.reset() // TODO: Only reset once per tab group so that it generates unique IDs in case the input leads to the same slug?
    const tabId = slugger.slug(tabTitle)
    // line breaks seems to be needed in case the source markup has no empty line between start tag and Markdown content
    const block = `${ this.tabs.length > 0 ? '</div>' : '' }<div class="tab tab-${tabId}">\n`
    this.tabs.push({ title: tabTitle, id: tabId })
    return this.nodelist.push(block)
  }

/*
const template = '<div class="extended-markdown {{ tagName }} {{ classes }}">{{ output }}</div>'

class ExtendedMarkdown extends Liquid.Block {
  async render (context) {
    const chunks = await super.render(context)
    const output = Liquid.Helpers.toFlatString(chunks)
    return this.template.engine.parseAndRender(template, {
      tagName: this.tagName,
      classes: tags[this.tagName],
      output
    })
  }
}
*/

/*
  this.templatePath = path.join(__dirname, `../../includes/tabs.html`)
  this.template = null
  
  async getTemplate () {
    if (!this.template) {
      this.template = await fs.promises.readFile(this.templatePath, 'utf8')
      this.template = this.template.replace(/\r/g, '')
    }
    
    return this.template
  }
  */
  
  endTag () {
      this.nodelist.push('</div>')
      return super.endTag()
  }

  async render (context) {

    // TODO: push a dummy as first node, then update it here? (but from which callback?)
    // TODO: 4+ leading spaces in tabs.html = markdown code block, how to avoid? Use '{% include tabs %}' as inline template?
    //const src = await this.template.engine.fileSystem.readTemplateFile(this.name())
    const src = `{% include tabs %}`
    this.tabs.forEach(async tab => {
      // Could use textOnly mode to strip out markup, but slugger does that and more, see pushBlock()
      //await renderContent(tab.title, null, { textOnly: true })
      const htmlTitle = await renderContent(tab.title, null)
      assert(htmlTitle.startsWith('<p>') && htmlTitle.endsWith('</p>'), 'expected wrapping <p></p>')
      tab.title = htmlTitle.slice(3, -4) // HACK: remove surrounding <p></p>
    })
    const result = await this.template.engine.parseAndRender(src, {
      tabs: this.tabs,
      group: this.group
    })
    //console.log(`tabs.html:\n${result}\n---`)
    //this.nodelist.unshift(result)
    //const rendered = this.renderAll(this.nodelist, context)
    const rendered = [result]
    for (let n of this.nodelist) {
      if (typeof n === 'string') {
        rendered.push(n)
      } else {
        rendered.push(await n.render(context))
      }
    }
    //const temp = await Promise.all([result, rendered]).then(([a, b]) => [a, ...b])
    //console.log(JSON.stringify(temp, null, 2))
    //return temp // TODO: Does the result get rendered once more? How to (partially) avoid it? Return a render() closure?
    return rendered
  }
}
