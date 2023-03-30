---
title: '{% data variables.product.product_name %}{% ifversion fpt or ghec%}.com{% endif %} Fixture Documentation'
featuredLinks:
  gettingStarted:
    - /get-started/quickstart/hello-world
  popular:
    - get-started
redirect_from:
  - /olden-days
versions: '*'
children:
  # The list of childen in the fixtures has to be the same names
  # as we use in the real content. It can have fewer but can't include
  # anything that the real `/content/index.md` doesn't contain for this.
  # The reason is that the `npm run build` compiles a list of rewrites
  # so that URLs like `/en/get-started/anything` can be treated,
  # as if the URL had been `/en/free-pro-team@latest/get-started/anything`.
  - search
  - get-started
  - early-access
  - pages
  - code-security
  # - account-and-profile
  # - authentication
  # - repositories
  # - admin
  # - billing
  # - site-policy
  # - organizations
  # - pull-requests
  # - issues
  # - actions
  # - copilot
  # - codespaces
  # - packages
  # - search-github
  # - developers
  # - rest
  # - graphql
  # - github-cli
  # - discussions
  # - sponsors
  # - communities
  # - education
  # - desktop
  # - support
childGroups:
  - name: Get started
    octicon: RocketIcon
    children:
      - get-started

externalProducts:
  electron:
    id: mothership
    name: GitHub itself
    href: 'https://github.com'
    external: true
---
