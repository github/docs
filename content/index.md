---
title: '{% data variables.product.github %}{% ifversion fpt or ghec %}.com{% endif %} Help Documentation'
featuredLinks:
  gettingStarted:
    - /get-started/git-basics/set-up-git
    - /authentication/connecting-to-github-with-ssh
    - /repositories/creating-and-managing-repositories
    - /get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  popular:
    - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
    - /authentication
    - /copilot/how-tos/completions/getting-code-suggestions-in-your-ide-with-github-copilot
    - /get-started/git-basics/managing-remote-repositories
    - /pages
redirect_from:
  # General redirects
  - /github
  - /articles
  - /common-issues-and-questions
  - /troubleshooting-common-issues
  # GitHub Policies (combined early access and production paths)
  - /github/enforcing-best-practices-with-github-policies
  - /github/enforcing-best-practices-with-github-policies/about-github-policies
  - /github/enforcing-best-practices-with-github-policies/constraints
  - /github/enforcing-best-practices-with-github-policies/contexts
  - /github/enforcing-best-practices-with-github-policies/expressions
  - /github/enforcing-best-practices-with-github-policies/getting-started
  - /github/enforcing-best-practices-with-github-policies/github-policies-vision
  - /github/enforcing-best-practices-with-github-policies/onboarding
  - /github/enforcing-best-practices-with-github-policies/overview
  - /github/enforcing-best-practices-with-github-policies/release-notes
  - /github/enforcing-best-practices-with-github-policies/resources
  - /github/enforcing-best-practices-with-github-policies/sharing
  - /github/enforcing-best-practices-with-github-policies/syntax
  # Deprecated site policies
  - /site-policy/site-policy-deprecated/github-ae-data-protection-agreement
  - /site-policy/site-policy-deprecated/github-ae-product-specific-terms
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
children:
  - account-and-profile
  - actions
  - admin
  - app
  - billing
  - code-security
  - communities
  - contributing
  - copilot
  - desktop
  - discussions
  - education
  - enterprise-onboarding
  - github-cli
  - github-models
  - issues
  - migrations
  - nonprofit
  - organizations
  - packages
  - page
  - pages
  - pull-requests
  - rest
  - repositories
  - search
  - search-github
  - site-policy
  - sponsors
  - support
  - webhooks
childGroups:
  - name: Get started
    octicon: RocketIcon
    children:
      - account-and-profile
      - authentication
      - billing
      - get-started
      - migrations
      - site-policy
  - name: Collaborative coding
    octicon: CommentDiscussionIcon
    children:
      - codespaces
      - discussions
      - pull-requests
      - repositories
  - name: GitHub Copilot
    octicon: CopilotIcon
    children:
      - copilot
      - copilot/how-tos/completions/getting-code-suggestions-in-your-ide-with-github-copilot
      - copilot/how-tos/chat/asking-github-copilot-questions-in-github
      - copilot/how-tos/agents/copilot-coding-agent
      - copilot/tutorials/copilot-chat-cookbook
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
      - code-security/code-scanning
      - code-security/dependabot
      - code-security/secret-scanning
      - code-security/security-advisories
      - code-security/supply-chain-security
  - name: Client apps
    octicon: DeviceMobileIcon
    children:
      - desktop
      - github-cli
      - get-started/using-github/github-mobile
  - name: Project management
    octicon: ProjectIcon
    children:
      - issues
      - issues/planning-and-tracking-with-projects
      - search-github
  - name: Enterprise and Teams
    octicon: OrganizationIcon
    children:
      - admin
      - code-security/securing-your-organization
      - enterprise-onboarding
      - organizations
  - name: Developers
    octicon: CodeSquareIcon
    children:
      - apps
      - graphql
      - rest
      - webhooks
      - copilot/how-tos/build-copilot-extensions
      - github-models
  - name: Community
    octicon: GlobeIcon
    children:
      - communities
      - contributing
      - education
      - nonprofit
      - sponsors
      - support
  - name: More docs
    octicon: PencilIcon
    children:
      - codeql
      - electron
      - npm
      - video-transcripts
externalProducts:
  electron:
    id: electron
    name: Electron
    href: 'https://electronjs.org/docs/latest'
    external: true
  codeql:
    id: codeql
    name: CodeQL query writing
    href: 'https://codeql.github.com/docs'
    external: true
  npm:
    id: npm
    name: npm
    href: 'https://docs.npmjs.com/'
    external: true
  gh-wa:
    id: gh-wa
    name: GitHub Well-Architected
    href: 'https://wellarchitected.github.com/'
    external: true
---
