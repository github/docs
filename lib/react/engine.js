const { renderToString } = require('react-dom/server')
const { transform } = require('./babel')
const React = require('react')
const fs = require('fs')
const path = require('path')
const dirTree = require('directory-tree')

// Name of directory for saving transformed components that should be gitignored
const dist = 'dist'

// Build React components
// This loops through the react components and transpiles them to /dist
// so they can be used by Node.js when we do server side rendering
const tree = dirTree('./react/')
for (const index in tree.children) {
  const file = tree.children[index]
  if (file.type === 'file') {
    if (!fs.existsSync(path.join(dist, 'react'))) {
      fs.mkdirSync(path.join(dist, 'react'), { recursive: true })
    }
    const content = transform(fs.readFileSync(file.path, 'utf8'))
    fs.writeFileSync(path.join(dist, file.path), content)
  }
}
// End Build React Components

// Register components
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
