---
title: About automation for issues and pull requests with query parameters
intro: You can use query parameters to share URLs with customized information.
redirect_from:
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or an issue template on {% data variables.product.prodname_dotcom %}. To create your own query parameters, you must match the key and value pair.

{% tip %}

**Tip:** You can also create issue templates that open with default labels, assignees, and an issue title. For more information, see "[Configuring issue templates for your repository](/articles/configuring-issue-templates-for-your-repository)" or "[Manually creating a single issue template for your repository](/articles/manually-creating-a-single-issue-template-for-your-repository)."

{% endtip %}

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to add a label to an issue to use the `labels` query parameter.

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a 404 error page.

### Supported query parameters

| Query parameter     | Пример                                                                                                                                                                                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `тело`              | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&body=Fixes+the+problem.` creates a pull request, comparing the branches `main` and `pull-request-test`, with the comment "Fixes the problem" in the pull request body. |
| `title`             | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` creates an issue with the label "bug" and title "New bug report."                                                                                                        |
| `labels`            | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&labels=bug` creates a pull request, comparing the branches `main` and `pull-request-test`, with the label "bug."                                                       |
| `шаблон`            | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` creates an issue with a template in the issue body.                                                                                                                               |
| `контрольная точка` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` creates an issue with the milestone "testing milestones."                                                                                                                       |
| `assignees`         | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` creates an issue and assigns it to @octocat.                                                                                                                                               |
| `projects`          | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` creates an issue with the title "Bug fix" and adds it to the organization's project board 1.                                                                           |

### Filling issues and pull requests with custom templates

{% data reusables.repositories.legacy-issue-template-tip %}

You can use the `template` query parameter to specify a template to automatically fill the issue or pull request body. The `template` query parameter works with templates stored in an `ISSUE_TEMPLATE` or `PULL_REQUEST_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository.

If a repository contains only the default pull request or issue template, any new issues or pull requests will have the default template in the body.

For more information, see "[Creating a pull request template for your repository](/articles/creating-a-pull-request-template-for-your-repository)" or "[Manually creating a single issue template for your repository](/articles/manually-creating-a-single-issue-template-for-your-repository)."

### Дополнительная литература

- "[Automation for release forms with query parameters](/articles/automation-for-release-forms-with-query-parameters)"
