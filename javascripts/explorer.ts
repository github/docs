const explorerUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://graphql.github.com/explorer'

// Pass non-search query params to Explorer app via the iFrame
export default function () {
  const graphiqlExplorer = document.getElementById('graphiql') as HTMLIFrameElement
  const queryString = window.location.search

  if (!(queryString && graphiqlExplorer)) return

  window.onload = () => {
    graphiqlExplorer?.contentWindow?.postMessage(queryString, explorerUrl)
  }
}
