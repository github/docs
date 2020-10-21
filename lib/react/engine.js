const { renderToString } = require('react-dom/server')
const { transform } = require('./babel')
const React = require('react')

const components = {
  CodeBlock: require('../../dist/react/CodeBlock'),
  CodeEditor: require('../../dist/react/CodeEditor')
}

const renderReact = async componentStr => {
  // Get component name as string so we can use it in the class name
  // which will be needed later if we choose to do client side React hydration
  const componentName = componentStr.match(/<([a-zA-Z]+)\s/)[1]
  // Add the wrapper and class name so we can later use React hydration on the client
  // side
  const jsx = `<div className="react-component-${componentName}">\n${componentStr}\n</div>`

  const component = transform(jsx)

  // eslint-disable-next-line
  const getComponent = new Function(
    'React',
    ...Object.keys(components),
    `${component.replace('React', 'return React')}`
  )

  return renderToString(getComponent(React, ...Object.values(components)))
}

module.exports = {
  renderReact
}
