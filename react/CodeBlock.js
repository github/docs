const React = require('react')
const ReactDOM = require('react-dom')
const { Prism } = require('react-syntax-highlighter')
const { dark } = require('react-syntax-highlighter/dist/cjs/styles/prism')

const CodeBlock = (props) => {
  return (
    <Prism language={props.language} style={dark}>
      {props.children}
    </Prism>
  )
}

module.exports = CodeBlock
