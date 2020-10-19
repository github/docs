const React = require('react')
const ReactDOM = require('react-dom')
const AceEditor = require('react-ace')

require('ace-builds/src-noconflict/mode-java')
require('ace-builds/src-noconflict/theme-github')

const timestamp = Date.now()

function onChange (newValue) {
  console.log('change', newValue)
}

const CodeEditor = (props) => {
  return (
    <div language={props.language}>
      <AceEditor
        mode={props.language}
        theme='github'
        onChange={onChange}
        name={`code-editor-${timestamp}`}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-CodeEditor')

  for (const componentContainer of componentContainers) {
    const div = componentContainer.children[0]
    const language = div.getAttribute('language')
    ReactDOM.hydrate(React.createElement(CodeEditor, { language: language }), componentContainer)
  }
}

module.exports = CodeEditor
