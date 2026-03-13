---
title: Dependabot pull request comment commands
intro: '{% data variables.product.prodname_dependabot %} responds to commands in comments on its pull requests, making it easy to triage and manage dependency updates.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot PR comment commands
contentType: reference
---

{% data variables.product.prodname_dependabot %} responds to simple commands in comments. Each pull request contains details of the commands you can use to process the pull request (for example: to merge, squash, reopen, close, or rebase the pull request) under the "{% data variables.product.prodname_dependabot %} commands and options" section. The aim is to make it as easy as possible for you to triage these automatically generated pull requests.

## Commands for {% data variables.product.prodname_dependabot %} pull requests

You can use any of the following commands on a {% data variables.product.prodname_dependabot %} pull request.

| Command                                      | Description                                                                                                                                                                                                                     |
| --- | --- |
| `@dependabot cancel merge`                   | Cancels a previously requested merge.                                                                                                                                                                                          |
| `@dependabot close`                          | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from recreating that pull request. You can achieve the same result by closing the pull request manually.                                  |
| `@dependabot ignore this dependency`         | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this dependency (unless you reopen the pull request or upgrade to the suggested version yourself). |
| `@dependabot ignore this major version`      | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this major version (unless you reopen the pull request or upgrade to this major version yourself). |
| `@dependabot ignore this minor version`      | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this minor version (unless you reopen the pull request or upgrade to this minor version yourself). |
| `@dependabot ignore this patch version`      | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this patch version (unless you reopen the pull request or upgrade to this patch version yourself). |
| `@dependabot merge`                          | Merges the pull request once your CI tests have passed.                                                                                                                                                                        |
| `@dependabot rebase`                         | Rebases the pull request.                                                                                                                                                                                                      |
| `@dependabot recreate`                       | Recreates the pull request, overwriting any edits that have been made to the pull request.                                                                                                                                     |
| `@dependabot reopen`                         | Reopens the pull request if the pull request is closed.                                                                                                                                                                        |
| `@dependabot show DEPENDENCY_NAME ignore conditions` | Retrieves information on the ignore conditions for the specified dependency, and comments on the pull request with a table that displays all ignore conditions for the dependency. For example, `@dependabot show express ignore conditions` would find all `ignore` conditions stored for the Express dependency, and comment on the pull request with that information. |
| `@dependabot squash and merge`               | Squashes and merges the pull request once your CI tests have passed.                                                                                                                                                           |

## Commands for grouped version updates

In {% data variables.product.prodname_dependabot %} pull requests for grouped version updates and security updates, you can use comment commands to ignore and un-ignore updates for specific dependencies and versions. You can use any of the following commands to manage ignore conditions for grouped updates.

| Command                                      | Description                                                                                                                                                                                                                     |
| --- | --- |
| `@dependabot ignore DEPENDENCY_NAME`         | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from updating this dependency.                                                                                                           |
| `@dependabot ignore DEPENDENCY_NAME major version` | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from updating this dependency's major version.                                                                                           |
| `@dependabot ignore DEPENDENCY_NAME minor version` | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from updating this dependency's minor version.                                                                                           |
| `@dependabot ignore DEPENDENCY_NAME patch version` | Closes the pull request and prevents {% data variables.product.prodname_dependabot %} from updating this dependency's patch version.                                                                                           |
| `@dependabot unignore *`                     | Closes the current pull request, clears all `ignore` conditions stored for all dependencies in the group, then opens a new pull request.                                                                                       |
| `@dependabot unignore DEPENDENCY_NAME`       | Closes the current pull request, clears all `ignore` conditions stored for the dependency, then opens a new pull request that includes available updates for the specified dependency. For example, `@dependabot unignore lodash` would open a new pull request that includes updates for the Lodash dependency. |
| `@dependabot unignore DEPENDENCY_NAME IGNORE_CONDITION` | Closes the current pull request, clears the stored `ignore` condition, then opens a new pull request that includes available updates for the specified ignore condition. For example, `@dependabot unignore express [< 1.9, > 1.8.0]` would open a new pull request that includes updates for Express between versions 1.8.0 and 1.9.0. |

> [!TIP]
> When you want to un-ignore a specific ignore condition, use the `@dependabot show DEPENDENCY_NAME ignore conditions` command to quickly check what ignore conditions a dependency currently has.
