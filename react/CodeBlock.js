const React = require('react')
const ReactDOM = require('react-dom')
const { Prism } = require('react-syntax-highlighter')
const { dark } = require('react-syntax-highlighter/dist/cjs/styles/prism')
const { Tab, Tabs, TabList, TabPanel } = require('react-tabs')


const CodeBlock = (props) => {
  let jsPanel
  let jsTab
  let phpPanel
  let phpTab
  let pythonPanel
  let pythonTab

  if (props.js) {
    jsPanel = (
      <TabPanel>
        <Prism language='javascript' style={dark}>
          {props.js}
        </Prism>
      </TabPanel>
    )

    jsTab = <Tab>Javascript</Tab>
  }

  if (props.php) {
    phpPanel = (
      <TabPanel>
        <Prism language='php' style={dark}>
          {props.php}
        </Prism>
      </TabPanel>
    )

    phpTab = <Tab>PHP</Tab>
  }

  if (props.python) {
    pythonPanel = (
      <TabPanel>
        <Prism language='python' style={dark}>
          {props.python}
        </Prism>
      </TabPanel>
    )

    pythonTab = <Tab>Python</Tab>
  }

  return (
    <div js={props.js} php={props.php} python={props.python}>
      <Tabs>
        <TabList>
          {jsTab}
          {phpTab}
          {pythonTab}
        </TabList>
        {jsPanel}
        {phpPanel}
        {pythonPanel}
      </Tabs>
    </div>
  )
}

module.exports = CodeBlock
if (typeof window !== 'undefined') {
  const componentContainers = document.querySelectorAll('.react-component-CodeBlock')

  for (const componentContainer of componentContainers) {
    const div = componentContainer.children[0]
    const js = div.getAttribute('js')
    const php = div.getAttribute('php')
    const python = div.getAttribute('python')
    ReactDOM.hydrate(React.createElement(CodeBlock, { js: js, php: php, python: python }), componentContainer)
  }
}
