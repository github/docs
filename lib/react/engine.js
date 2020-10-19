const { renderToString } = require('react-dom/server')
const transform = require('./transform')

// These all need to be here even though eslint doesn't think so
/* eslint-disable */
const React = require('react')
const CodeBlock = require('../../dist/react/CodeBlock')
const CoolTable = require('../../dist/react/CoolTable')
/* eslint-enable */

const renderReact = async componentStr => {
  const componentName = componentStr.match(/[^<]([a-zA-Z])*/gm)[0]
  const jsx = `<div className="react-component-${componentName}">\n${componentStr}\n</div>`
  const component = transform(jsx)

  // eslint-disable-next-line
  return renderToString(eval(component))
}

module.exports = {
  renderReact
}
