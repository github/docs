const Liquid = require('liquid')
const renderContent = require('../render-content/renderContent')
const path = require('path')
const slugger = new (require('github-slugger'))()

const SyntaxHelp = "Syntax Error in tag 'tabs' - Valid syntax: tabs [group]"
const TabSyntaxHelp = "Syntax Error in tag 'tab' - Valid syntax: tab [title]"
//const Syntax = RegExp('(' + Liquid.QuotedString.source + ')')
//const TabSyntax = RegExp('(' + Liquid.QuotedString.source + ')')
const Syntax = TabSyntax = /"([^"]+)"|'([^']+)'/

const endTab = '</div>'
// TODO: Re-use code for templating?
//const LiquidTag = require('./liquid-tag')

// TODO: derive from ExtendedMarkdown to support admonitions like {% danger %}?!
module.exports = class Tabs extends Liquid.Block {
  constructor (template, tagName, markup) {
    super(template, tagName, markup)
    const match = Syntax.exec(markup)
    if (!match) {
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
    /*
    if (tag === 'else') {
      const block = new Liquid.ElseCondition()
      this.blocks.push(block)
      this.nodelist = block.attach([])
      return this.nodelist
    }
    */

    //const tab = Liquid.Helpers.scan(markup, TabSyntax)
    const match = TabSyntax.exec(markup)
    if (!match) {
        throw new Liquid.SyntaxError(TabSyntaxHelp)
    }
    const tabTitle = match[1]
    slugger.reset()
    const tabId = slugger.slug(tabTitle)
    if (tabTitle) {
        // line breaks seems to be needed in case the source markup has no empty line between start tag and Markdown content
        const block = `${ this.tabs.length > 0 ? endTab : '' }<div class="tab tab-${tabId}">\n`
        this.tabs.push({ title: tabTitle, id: tabId })
        return this.nodelist.push(block)
    } else {
        // TODO: Is this necessary or can we just skip it?
        return this.nodelist.push(void 0)
    }

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
      //this.nodelist.push('[/tabs]')
      this.nodelist.push(endTab)
      return super.endTag()
  }

  async render (context) {

    // TODO: push a dummy as first node, then update it here? (but from which callback?)
    // TODO: 4+ leading spaces in tabs.html = markdown code block, how to avoid? Use '{% include tabs %}' as inline template?
    const src = await this.template.engine.fileSystem.readTemplateFile(this.name())
    this.tabs.forEach(async tab => {
      // Could use textOnly mode to strip out markup, but slugger does that and more, see pushBlock()
      //await renderContent(tab.title, null, { textOnly: true })
      tab.title = (await renderContent(tab.title, null)).slice(3, -4) // HACK: remove surrounding <p>
    })
    const result = await this.template.engine.parseAndRender(src, {
      tabs: this.tabs,
      group: this.group
    })
    //this.nodelist.unshift(`\n[tabs] ${ this.tabs.map(tab => tab.title).join(', ') }\n`)
    this.nodelist.unshift(result)
    return this.renderAll(this.nodelist, context)
  }
}
