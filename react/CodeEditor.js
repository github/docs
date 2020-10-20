const React = require('react')
const ReactDOM = require('react-dom')
const AceEditor = require('react-ace').default

const hash = require('object-hash')

require('ace-builds/src-noconflict/mode-javascript')
require('ace-builds/src-noconflict/theme-github')

function onChange (newValue) {
  console.log('change', newValue)
}

const CodeEditor = (props) => {
  return (
    <div language={props.language} code={props.code}>
      <AceEditor
        mode={props.language}
        theme='github'
        onChange={onChange}
        name={`code-editor-${hash({ language: props.language, code: props.code })}`}
        editorProps={{ $blockScrolling: true }}
        defaultValue={props.code}
      />
    </div>
  )
}

if (typeof window !== 'undefined') {
  const componentContainers = document.querySelectorAll('.react-component-CodeEditor')

  for (const componentContainer of componentContainers) {
    const div = componentContainer.children[0]
    const language = div.getAttribute('language')
    const code = div.getAttribute('code')
    ReactDOM.hydrate(React.createElement(CodeEditor, { language: language, code: code }), componentContainer)
  }
}

module.exports = CodeEditor
