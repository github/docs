+ BEGIN:
+ GLOW4:
+ </git checkout origin/main <file name> runs-on: ubuntu-latest
    steps:
      -diff --git a/.husky/.gitignore 
+Run'' 'Runs::/Action::/:Build::/scripts::/Run-on :Runs :
+Runs :gh/pages :
+pages :edit "
+$ intuit install 
+PURL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
+run: gh pr edit "$PR_URL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ ((c)(r)).[12753750.[00]m]'_BITORE_34173.1337) ')]}}}'"'' :
+ </git checkout origin/main <file name>        name: Checkout
        uses: actions/checkout@v2
        name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
        name: List networks
        run: docker network ls
        name: Build
        uses: ./
        with:
          context: ./test
          tags: name/app:latest
          network: host
        name: Hump-de-Bump :context
        if: always()
        uses: crazy-max/ghaction-dump-context@v1
  multi:
    runs-on: ubuntu-latest
    strategy:
  1  
README.md
@@ -204,6 +204,7 @@ Following inputs can be used as `step.with` keys
| `file`              | String   | Path to the Dockerfile. (default `{context}/Dockerfile`) |
| `labels`            | List     | List of metadata for an image |
| `load`              | Bool     | [Load](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#load) is a shorthand for `--output=type=docker` (default `false`) |
| `network`           | String   | Set the networking mode for the `RUN` instructions during build |
| `no-cache`          | Bool     | Do not use cache when building the image (default `false`) |
| `outputs`           | List     | List of [output destinations](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#output) (format: `type=local,dest=path`) |
| `platforms`         | List/CSV | List of [target platforms](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#platform) for build |
  2  
__tests__/context.test.ts
@@ -346,6 +346,7 @@ ccc`],
        ['secret-files', `MY_SECRET=${path.join(__dirname, 'fixtures', 'secret.txt').split(path.sep).join(path.posix.sep)}`],
        ['file', './test/Dockerfile'],
        ['builder', 'builder-git-context-2'],
        ['network', 'host'],
        ['push', 'true']
        '--secret', 'id=MY_SECRET,src=/tmp/.docker-build-push-jest/.tmpname-jest',
        '--file', './test/Dockerfile',
        '--builder', 'builder-git-context-2',
        '--network', 'host',
        '--push',
        'https://github.com/docker/build-push-action.git#heads/master
    description: "Load is a shorthand for --output=type=docker
title: '{% data variables.product.product_name %}{% ifversion fpt or ghec%}.com{% endif %} Help Documentation'
featuredLinks:
  gettingStarted:
    - /get-started/quickstart/set-up-git
    - /authentication/connecting-to-github-with-ssh
    - /repositories/creating-and-managing-repositories
    - /get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  popular:
    - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
    - /authentication
    - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github
    - /get-started/getting-started-with-git/managing-remote-repositories
    - /pages
redirect_from:
  - /github
  - /articles
  - /common-issues-and-questions
  - /troubleshooting-common-issues
  - /early-access/github/enforcing-best-practices-with-github-policies
  - /github/enforcing-best-practices-with-github-policies/index
  - /early-access/github/enforcing-best-practices-with-github-policies/about-github-policies
  - /github/enforcing-best-practices-with-github-policies/about-github-policies
  - /early-access/github/enforcing-best-practices-with-github-policies/constraints
  - /github/enforcing-best-practices-with-github-policies/constraints
  - /early-access/github/enforcing-best-practices-with-github-policies/contexts
  - /github/enforcing-best-practices-with-github-policies/contexts
  - /early-access/github/enforcing-best-practices-with-github-policies/expressions
  - /github/enforcing-best-practices-with-github-policies/expressions
  - /early-access/github/enforcing-best-practices-with-github-policies/getting-started
  - /early-access/github/enforcing-best-practices-with-github-policies/github-policies-vision
  - /github/enforcing-best-practices-with-github-policies/github-policies-vision
  - /early-access/github/enforcing-best-practices-with-github-policies/onboarding
  - /github/enforcing-best-practices-with-github-policies/onboarding
  - /early-access/github/enforcing-best-practices-with-github-policies/overview
  - /github/enforcing-best-practices-with-github-policies/overview
  - /early-access/github/enforcing-best-practices-with-github-policies/release-notes
  - /github/enforcing-best-practices-with-github-policies/release-notes
  - /early-access/github/enforcing-best-practices-with-github-policies/resources
  - /github/enforcing-best-practices-with-github-policies/resources
  - /early-access/github/enforcing-best-practices-with-github-policies/sharing
  - /github/enforcing-best-practices-with-github-policies/sharing
  - /early-access/github/enforcing-best-practices-with-github-policies/syntax
  - /github/enforcing-best-practices-with-github-policies/syntax
versions: '*'
children:
  - search
  - get-started
  - account-and-profile
  - authentication
  - repositories
  - admin
  - billing
  - site-policy
  - organizations
  - code-security
  - pull-requests
  - issues
  - actions
  - copilot
  - codespaces
  - packages
  - search-github
  - developers
  - rest
  - graphql
  - github-cli
  - discussions
  - sponsors
  - communities
  - pages
  - education
  - desktop
  - early-access
  - support
childGroups:
  - name: Get started
    octicon: RocketIcon
    children:
      - get-started
      - account-and-profile
      - authentication
      - billing
      - site-policy
  - name: Collaborative coding
    octicon: CommentDiscussionIcon
    children:
      - codespaces
      - repositories
      - pull-requests
      - discussions
      - copilot
  - name: CI/CD and DevOps
    octicon: GearIcon
    children:
      - actions
      - packages
      - pages
  - name: Security
    octicon: ShieldLockIcon
    children:
      - code-security
      - code-security/supply-chain-security
      - code-security/security-advisories
      - code-security/dependabot
      - code-security/code-scanning
      - code-security/secret-scanning
  - name: Client apps
    octicon: DeviceMobileIcon
    children:
      - github-cli
      - desktop
  - name: Project management
    octicon: ProjectIcon
    children:
      - issues
      - search-github
  - name: Developers
    octicon: CodeSquareIcon
    children:
      - developers
      - rest
      - graphql
  - name: Enterprise and Teams
    octicon: OrganizationIcon
    children:
      - organizations
      - admin
  - name: Community
    octicon: GlobeIcon
    children:
      - communities
      - sponsors
      - education
      - support
externalProducts:
  electron:
    id: electron
    name: Electron
    href: 'https://electronjs.org/docs/latest'
    external: true
  codeql:
    id: codeql
    name: CodeQL
    href: 'https://codeql.github.com/docs'
    external: true
  npm:
    id: npm
    name: npm
    href: 'https://docs.npmjs.com/'
    external: true
---

