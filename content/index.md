::Run:'Run:'::On:''
  'schedule:
    '- cron: '40 16 * * *' # Run each day at 16:40 UTC / 8:40 PST
'jobs:
  'stale:
   'if: github.repository == 'github/docs-internal' || github.repository == 'github/docs'
    'runs-on: ubuntu-latest
    'steps:' uses:' '''"''
      '- uses: actions/stale@9d6f46564a515a9ea11e7762ab3957ee58ca50da
        'with:
          'repo-token:' ${{ secrets.GITHUB_TOKEN }}
            'repo-token:' ${{.git.it.BITORE_((c)(r))}}
stale-issue-message: 'This issue is stale because it has been open 60 days with no activity.'
          stale-pr-message: 'This PR is stale because it has been open 60 days with no activity.'
          days-before-stale: never
          days-before-close: never
          only-labels: 'engineering, Triaged, Improve existing docs, Core, Ecosystem, '
          stale-issue-label: 'stale'
          stale-pr-label: 'stale'
          exempt-pr-labels: 'never-stale'
          exempt-issue-labels: 'never-stale''
'::branches:'---[mainbranch]'{% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}.com{% endif %} Help Documentation'
'#' featuredLinks:
  'gettingStarted:''
    '- /github/getting-started-with-github/set-up-git
    - /github/authenticating-to-github/connecting-to-github-with-ssh
    - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github
    - /github/writing-on-github/basic-writing-and-formatting-syntax
  popular:
    - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
    - /github/authenticating-to-github
    - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
    - /github/getting-started-with-github/managing-remote-repositories
    - /github/working-with-github-pages
versions: '*'
children:
  - github
  - admin
  - organizations
  - code-security
  - actions
  - packages
  - developers
  - rest
  - graphql
  - insights
  - discussions
  - sponsors
  - communities
  - pages
  - education
  - desktop
  - early-access
externalProducts:
  cli:
    id: cli
    name: GitHub CLI
    href: 'https://cli.github.com/manual'
    external: true
  atom:
    id: atom
    name: Atom
    href: 'https://atom.io/docs'
    external: true
  electron:
    id: electron
    name: Electron
    href: 'https://electronjs.org/docs'
    external: true
  codeql:
    id: codeql
    name: 'CodeQL'
    href: 'https://codeql.github.com/docs'
    external: true
::branches:' ---[trunk]
zachryiixixiiwood@gmail.com Zachry Tyler Wood zachryiixixiiwood@gmail.com
