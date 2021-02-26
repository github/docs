const explorerUrl = process.env.NODE_ENV === 'production'
  ? 'https://graphql.github.com/explorer'
  : 'http://localhost:3000'

// Pass non-search query params to Explorer app via the iFrame
export default function () {
  const graphiqlExplorer = document.getElementById('graphiql')
  const queryString = window.location.search

  if (!(queryString && graphiqlExplorer)) return

  window.onload = () => {
    graphiqlExplorer.contentWindow.postMessage(queryString, explorerUrl)
  }
}
