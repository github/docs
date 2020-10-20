const { renderToString } = require('react-dom/server')
const { transform } = require('./babel')

// These all need to be here even though eslint doesn't think so
/* eslint-disable */
const React = require('react')
const CodeBlock = require('../../dist/react/CodeBlock')
const CodeEditor = require('../../dist/react/CodeEditor')
/* eslint-enable */

const renderReact = async componentStr => {
  const componentName = componentStr.match(/<([a-zA-Z]+)\s/)[1]
  const jsx = `<div className="react-component-${componentName}">\n${componentStr}\n</div>`
  const component = transform(jsx)

  // eslint-disable-next-line
  return renderToString(eval(component))
}

module.exports = {
  renderReact
}
