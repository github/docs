!(async function () {
  const regexp = /https:\/\/github.com\/github\/([^\/]*)\/pull\/\d*\/files/

  if (!window.location.href.match(regexp)) {
    window.alert("You're not on a PR 'Files changed' page. 🙃")
    return
  }

  const conversation_url = window.location.href.replace(/files.*/g, '')

  // get the preview deployment URL by loading the 'Conversation' page, and searching for the 'View deployment' link
  let deployment_url = await fetch(conversation_url)
    .then(function (response) {
      return response.text()
    })
    .then(function (html) {
      // Convert the HTML string into a document object
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const elements = doc.getElementsByClassName('TimelineItem')
      // Find the element that is a link that contains the text "View deployment"
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const links = element.getElementsByTagName('a')
        for (let j = 0; j < links.length; j++) {
          const link = links[j]
          if (link.innerText.match(/View deployment/)) {
            // Get the href of the link
            const deployment_url = link.getAttribute('href')
            return deployment_url
          }
        }
      }
    })
  if (deployment_url == null) {
    window.alert('No preview deployment found! 😭')
    return
  }
  // strip any trailing slash from deployment_url
  deployment_url = deployment_url.replace(/\/$/, '')

  const url_dotcom = deployment_url + '/en/free-pro-team@latest'
  const url_ghec = deployment_url + '/en/enterprise-cloud@latest'
  const url_ghes = deployment_url + '/en/enterprise-server@latest'
  const url_ae = deployment_url + '/en/github-ae@latest'
  const dotcom = 'dotcom'
  const ghes = 'GHES'
  const ghec = 'GHEC'
  const ae = 'AE'

  const file_info = document.querySelectorAll('div.file-info')
  for (let i = 0; i < file_info.length; i++) {
    let link = file_info[i].querySelector('a').title
    if (link.search('data/') === 0) {
      continue
    } else {
      const regex = /\.md$/
      const markdownfile = link.search(regex) >= 0
      if (markdownfile) {
        console.log('link: ' + link)
        link = link.replace(regex, '')
        link = link.replace(/^content/, '')
        link = link.replace(/\/index/, '')
        let span = document.createElement('SPAN')
        span.style.fontFamily =
          '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif'
        span.innerHTML = '&nbsp; View: '

        span = addLink(span, dotcom, url_dotcom + link)
        span.innerHTML += ' / '
        span = addLink(span, ghec, url_ghec + link)
        span.innerHTML += ' / '
        span = addLink(span, ghes, url_ghes + link)
        span.innerHTML += ' / '
        span = addLink(span, ae, url_ae + link)

        file_info[i].appendChild(span)
      }
    }
  }

  function addLink(span, link_name, link_href) {
    const anchor = document.createElement('A')
    anchor.innerHTML = link_name
    anchor.href = link_href
    anchor.target = '_blank'
    span.appendChild(anchor)
    return span
  }
})()
