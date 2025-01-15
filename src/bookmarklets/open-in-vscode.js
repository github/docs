/* The path to your local copy of repo */
const checkoutPath = 'REPLACE_ME'

const filepath = window.location.pathname.replace(/\/en\/([^@]+?@[^@]+?\/)?/, '/content/')
const isIndexFile = filepath.split('/').length < 5
const filename = isIndexFile ? '/index.md' : '.md'
const fullpath = 'vscode://file' + checkoutPath + filepath + filename
window.open(fullpath, '_blank')
