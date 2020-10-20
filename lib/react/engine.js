const { renderToString } = require('react-dom/server')
const { transform } = require('./babel')

// These all need to be here even though eslint doesn't think so
/* eslint-disable */
const React = require('react')
const CodeBlock = require('../../dist/react/CodeBlock')
const CodeEditor = require('../../dist/react/CodeEditor')
/* eslint-enable */

const renderReact = async componentStr => {
  // Get component name as string so we can use it in the class name
  // which will be needed later if we choose to do client side React hydration
  const componentName = componentStr.match(/<([a-zA-Z]+)\s/)[1]
  // Add the wrapper and class name so we can later use React hydration on the client
  // side
  const jsx = `<div className="react-component-${componentName}">\n${componentStr}\n</div>`
  const component = transform(jsx)

  // eslint-disable-next-line
  return renderToString(eval(component))
}

module.exports = {
  renderReact
}
