---
title: Managing pull requests for dependency updates
intro: 'You manage pull requests raised by {% data variables.product.prodname_dependabot %} in much the same way as other pull requests, but there are some extra options.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
versions:
  free-pro-team: '*'
topics:
  - Repositories
---
### About {% data variables.product.prodname_dependabot %} pull requests

{% data reusables.dependabot.pull-request-introduction %}

When {% data variables.product.prodname_dependabot %} raises a pull request, you're notified by your chosen method for the repository. Each pull request contains detailed information about the proposed change, taken from the package manager. These pull requests follow the normal checks and tests defined in your repository. In addition, where enough information is available, you'll see a compatibility score. This may also help you decide whether or not to merge the change. For information about this score, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

If you have many dependencies to manage, you may want to customize the configuration for each package manager so that pull requests have specific reviewers, assignees, and labels. For more information, see "[Customizing dependency updates](/github/administering-a-repository/customizing-dependency-updates)."

### Viewing {% data variables.product.prodname_dependabot %} pull requests

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Any pull requests for security and version updates are easy to identify.
    - The author is [dependabot](https://github.com/dependabot), the bot account used by {% data variables.product.prodname_dependabot %}.
    - By default, they have the `dependencies` label.

### Changing the rebase strategy for {% data variables.product.prodname_dependabot %} pull requests

By default, {% data variables.product.prodname_dependabot %} automatically rebases pull requests to resolve any conflicts. If you'd prefer to handle merge conflicts manually, you can disable this using the `rebase-strategy` option. For details, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)."

### Managing {% data variables.product.prodname_dependabot %} pull requests with comment commands

{% data variables.product.prodname_dependabot %} responds to simple commands in comments. Each pull request contains details of the commands you can use to process the pull request, for example: to merge, squash, reopen, close, or rebase the pull request. The aim is to make it as easy as possible for you to triage these automatically generated pull requests.

If you run any of the commands for ignoring dependencies or versions, {% data variables.product.prodname_dependabot %} stores the preferences for the repository centrally. While this is a quick solution, for repositories with more than one contributor it is better to explicitly define the dependencies and versions to ignore in the configuration file. This makes it easy for all contributors to see why a particular dependency isn't being updated automatically. For more information, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)."
