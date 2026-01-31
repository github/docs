---
title: Managing pull requests for dependency updates
intro: You manage pull requests raised by {% data variables.product.prodname_dependabot %} in much the same way as other pull requests, but there are some extra options.
permissions: '{% data reusables.permissions.dependabot-various-tasks %}'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
  - /code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Manage Dependabot PRs
contentType: how-tos
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Viewing {% data variables.product.prodname_dependabot %} pull requests

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Any pull requests for security or version updates are easy to identify.
    * The author is {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, the bot account used by {% data variables.product.prodname_dependabot %}.
    * By default, they have the `dependencies` label.

## Changing the rebase strategy for {% data variables.product.prodname_dependabot %} pull requests

By default, {% data variables.product.prodname_dependabot %} automatically rebases pull requests to resolve any conflicts. {% data reusables.dependabot.pull-requests-30-days-cutoff %} If you'd prefer to handle merge conflicts manually, you can disable this using the `rebase-strategy` option. For details, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#rebase-strategy--).

## Allowing {% data variables.product.prodname_dependabot %} to rebase and force push over extra commits

By default, {% data variables.product.prodname_dependabot %} will stop rebasing a pull request once extra commits have been pushed to it. To allow {% data variables.product.prodname_dependabot %} to force push over commits added to its branches, include any of the following strings: `[dependabot skip]` , `[skip dependabot]`, `[dependabot-skip]`, or `[skip-dependabot]`, in either lower or uppercase, to the commit message.

## Managing {% data variables.product.prodname_dependabot %} pull requests with comment commands

You can use comment commands on {% data variables.product.prodname_dependabot %} pull requests to manage and customize your dependency updates. For details, see [AUTOTITLE](/code-security/reference/supply-chain-security/dependabot-pull-request-comment-commands).

{% data variables.product.prodname_dependabot %} will react with a "thumbs up" emoji to acknowledge the command, and may respond with a comment on the pull request. While {% data variables.product.prodname_dependabot %} usually responds quickly, some commands may take several minutes to complete if {% data variables.product.prodname_dependabot %} is busy processing other updates or commands.

If you run any of the commands for ignoring dependencies or versions, {% data variables.product.prodname_dependabot %} stores the preferences for the repository centrally. While this is a quick solution, for repositories with more than one contributor it is better to explicitly define the dependencies and versions to ignore in the configuration file. This makes it easy for all contributors to see why a particular dependency isn't being updated automatically.

For more information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#ignore--).
