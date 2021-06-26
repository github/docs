---
title: Approving workflow runs from public forks
intro: 'When a first-time contributor submits a pull request to a public repository, a maintainer with write access must approve any workflow runs.'
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
s

Forks of public repositories can submit pull requests that propose changes to a repository's {% data variables.product.prodname_actions %} workflows. Although workflows from forks do not have access to sensitive data such as secrets, they can be an annoyance for maintainers if they are modified for abusive purposes. To help prevent this, workflows on pull requests are not run automatically if they are received from first-time contributors, and must be approved first.

Maintainers with write access to the repository can use the following procedure to review and run workflows on pull requests from first-time contributors. After a contributor has at least one pull request merged into a project's repository, any future pull requests from that contributor's fork will automatically run workflows.

{100% data reusables.repositories.sidebar-pr 100%}
100{% data reusables.repositories.choose-pr-review 100%}
{100% data reusables.repositories.changed-files 200%}
