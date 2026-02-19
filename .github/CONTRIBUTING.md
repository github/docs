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
    - /copilot/how-tos/get-code-suggestions/get-ide-code-suggestions
    - /get-started/git-basics/managing-remote-repositories
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
  - /site-policy/site-policy-deprecated/github-ae-data-protection-agreement
  - /site-policy/site-policy-deprecated/github-ae-product-specific-terms
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
children:
  - search
  - get-started
  - enterprise-onboarding
  - account-and-profile
  - subscriptions-and-notifications
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
  - integrations
  - migrations
  - packages
  - search-github
  - apps
  - webhooks
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
  - video-transcripts
  - contributing
  - github-models
  - nonprofit
childGroups:
  - name: Get started
    octicon: RocketIcon
    children:
      - get-started
      - migrations
      - account-and-profile
      - subscriptions-and-notifications
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
      - integrations
  - name: GitHub Copilot
    octicon: CopilotIcon
    children:
      - copilot
      - copilot/get-started/plans
      - copilot/how-tos/get-code-suggestions/get-ide-code-suggestions
      - copilot/how-tos/use-copilot-agents/coding-agent
      - copilot/tutorials
      - copilot/tutorials/copilot-chat-cookbook
      - copilot/tutorials/customization-library
  - name: CI/CD and DevOps
    octicon: GearIcon
    children:
      - actions
      - packages
      - pages
  - name: Security and quality
    octicon: ShieldLockIcon
    children:
      - code-security/how-tos/secure-your-secrets
      - code-security/how-tos/secure-your-supply-chain
      - code-security/how-tos/scan-code-for-vulnerabilities
      - code-security/how-tos/maintain-quality-code
  - name: Client apps
    octicon: DeviceMobileIcon
    children:
      - github-cli
      - get-started/using-github/github-mobile
      - desktop
  - name: Project management
    octicon: ProjectIcon
    children:
      - issues
      - issues/planning-and-tracking-with-projects
      - search-github
  - name: Enterprise and teams
    octicon: OrganizationIcon
    children:
      - organizations
      - code-security/how-tos/secure-at-scale
      - enterprise-onboarding
      - admin
  - name: Developers
    octicon: CodeSquareIcon
    children:
      - apps
      - rest
      - graphql
      - webhooks
      - github-models
  - name: Community
    octicon: GlobeIcon
    children:
      - communities
      - sponsors
      - education
      - nonprofit
      - support
      - contributing
  - name: More docs
    octicon: PencilIcon
    children:
      - codeql
      - electron
      - npm
      - gh-wa
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
# Welcome to GitHub docs contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:.

**📖 For comprehensive contribution guidance, please visit our official documentation at [docs.github.com/en/contributing](https://docs.github.com/en/contributing). This is our canonical source for all contribution processes and policies.**

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

This guide provides repository-specific information to supplement the official contribution documentation. For detailed processes, policies, and best practices, always refer to [docs.github.com/en/contributing](https://docs.github.com/en/contributing).

Use the table of contents icon <img alt="Table of contents icon" src="/contributing/images/table-of-contents.png" width="25" height="25" /> in the top corner of this document to get to a specific section of this guide quickly.

## New contributor guide

**Start here:** Visit [docs.github.com/en/contributing](https://docs.github.com/en/contributing) for complete contributor onboarding and guidelines.

For repository-specific setup, read the [README](../README.md) file. The official docs site also provides these helpful resources:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/git-basics/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Contribution types and what we're looking for

Content we accept:
* Technical and grammatical corrections
* Typo fixes
* Expanded explanations of existing products or features, when the expansion has a compelling reason
* New content filling important gaps in our documentation. For example, [this pull request](https://github.com/github/docs/pull/38048) added a useful section on security hardening for GitHub Actions.

Content we do not currently accept:
* Edits purely for tone, readability, or efficiency
* Topics that are too niche or a matter of personal preference
* Changes to the underlying site and workflows

These are general guidelines, but if you’re not sure what category your proposed change would fall under, feel free to open an issue to discuss it with us!

## Getting started

📚 **Primary resource:** [docs.github.com/en/contributing](https://docs.github.com/en/contributing) contains our complete contribution workflow and policies.

For repository-specific information:
- See [the introduction to working in the docs repository](/contributing/README.md) :confetti_ball:
- Check our [types of contributions](/contributing/types-of-contributions.md) we accept
- Review our markdown style guidelines in the `/contributing` directory

### Writing style guidelines

When contributing content, please follow these key principles from our [style guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide):

- **Clarity and simplicity**: The goal of our writing style is clarity and simplicity.
- **Meaning over grammar**: Grammatical correctness is important, but not as important as clarity and meaning.
- **Second person**: The docs use second-person ("you") to communicate directly with readers.
- **Inclusive language**: Use inclusive language by not assuming gender or ability level, and by avoiding slang and idioms.
- **Accessible technical language**: Jargon is sometimes necessary, but don't assume every reader has your technical expertise.
- **Active voice**: Use active voice wherever possible. Active voice means avoiding "be" verbs like "is" or "are" when you can, but also choosing more dynamic verbs to get your point across. "Press (a key)" is less dynamic than "tap (a key)," for example.
- **Clear terminology**: Avoid technical abbreviations like "repo" and "PR," and Latin abbreviations like "i.e." and "e.g."

For complete style guidance, see our [style guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide).

### Issues

**For detailed issue guidelines, see [docs.github.com/en/contributing](https://docs.github.com/en/contributing).**

#### Repository-specific notes:
- Search [existing issues](https://github.com/github/docs/issues) before creating new ones
- Use our [label reference](https://docs.github.com/en/contributing/collaborating-on-github-docs/label-reference) to categorize appropriately
- Follow the issue templates provided in this repository

### Make Changes

**Complete change guidelines are available at [docs.github.com/en/contributing](https://docs.github.com/en/contributing).**

#### Repository-specific options:

**Make changes in the UI:** Click **Make a contribution** at the bottom of any docs page for small changes like typos or broken links.

<img src="/contributing/images/contribution_cta.png" />

**Make changes in a codespace:** See "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)" for documentation-specific setup.

**Make changes locally:** 
1. Fork the repository (see [official forking guide](https://docs.github.com/en/contributing))
2. Install Node.js at the version specified in `.node-version` (see [development guide](../contributing/development.md))
3. Create a working branch and start with your changes

### Commit your update

Follow the guidelines at [docs.github.com/en/contributing](https://docs.github.com/en/contributing) for commit best practices. 

Use our "[Self review checklist](https://docs.github.com/en/contributing/collaborating-on-github-docs/self-review-checklist)" before committing.

### Pull Request

**Complete pull request (PR) guidelines:** [docs.github.com/en/contributing](https://docs.github.com/en/contributing)

**Repository-specific notes:**
- Fill the "Ready for review" template
- [Link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if applicable
- Enable [maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)

A Docs team member will review following our [standard review process](https://docs.github.com/en/contributing).

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:.

Once merged, your contributions will be visible on [GitHub docs](https://docs.github.com/en). 

Continue contributing using our [types of contributions guide](/contributing/types-of-contributions.md) or explore more opportunities at [docs.github.com/en/contributing](https://docs.github.com/en/contributing).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
