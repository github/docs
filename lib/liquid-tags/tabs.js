const Liquid = require('liquid')
const PromiseReduce = require('liquid/lib/promise_reduce')

const SyntaxHelp = "Syntax Error in tag 'tabs' - Valid syntax: tabs [group]"
const TabSyntaxHelp = "Syntax Error in tag 'tab' - Valid syntax: tab [title]"
//const Syntax = RegExp('(' + Liquid.QuotedString.source + ')')
//const TabSyntax = RegExp('(' + Liquid.QuotedString.source + ')')
const Syntax = TabSyntax = /"([^"]*)"|'([^']*)'/

module.exports = class Tabs extends Liquid.Block {
  constructor (template, tagName, markup) {
    super(template, tagName, markup)
    const match = Syntax.exec(markup)
    if (!match) {
      throw new Liquid.SyntaxError(SyntaxHelp)
    }
    //this.blocks = []
    this.tabs = []
  }

  unknownTag (tag, markup) {
    if (tag === 'tab') {
      return this.pushBlock(tag, markup)
    } else {
      return super.unknownTag(tag, markup)
    }
  }

  pushBlock (tag, markup) {
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
    this.tabs.push(tabTitle)

    if (tabTitle) {
        //const block = new Liquid.Condition(this.markup, '==', value)
        const block = `\n${tag} '${tabTitle}'\n`
        return this.nodelist.push(block)
    } else {
        return this.nodelist.push(void 0)
    }

  }

  async render (context) {
    /*
    const block = await PromiseReduce(this.blocks, async (chosenBlock, block) => {
      if (chosenBlock != null) return chosenBlock
      const ok = await block.evaluate(context)
      if (ok) return block
    }, null)
    */
    console.warn('-- tabs render')

    // TODO: push a dummy as first node, then update it here?
    this.nodelist.unshift(`\nTabs: ${ this.tabs.join(', ') }\n`)
    return this.renderAll(this.nodelist, context)
  }
}
