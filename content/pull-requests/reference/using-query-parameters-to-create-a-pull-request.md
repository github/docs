---
title: Using query parameters to create a pull request
intro: 'Use query parameters to create custom URLs that open pull requests with pre-filled titles, descriptions, labels, and more.'
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Create pull requests
contentType: reference
---

You can add query parameters to a compare URL to open a pull request with pre-populated fields. For pull request templates, see [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).

| Parameter | Purpose | Example |
| --- | --- | --- |
| `quick_pull` | Opens the "Open a pull request" page for the compared branches. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` |
| `title` | Adds a pull request title. Use `+` for spaces. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix` |
| `body` | Adds text to the pull request body. Use `+` for spaces. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` |
| `labels` | Adds one or more labels. Separate multiple labels with commas. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` |
| `milestone` | Adds a milestone. Use `+` for spaces. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` |
| `assignees` | Assigns the pull request to one or more users. Separate multiple users with commas. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` |
| `projects` | Adds the pull request to a project. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` |
| `template` | Adds a pull request template from a `PULL_REQUEST_TEMPLATE` subdirectory in the root, `docs/`, or `.github/` directory. | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` |

You must have permission to complete the equivalent action to use its query parameter. For example, you must have permission to add labels to use `labels`. See [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

Invalid query parameters or insufficient permissions return a `404 Not Found` error. URLs that exceed the server limit return a `414 URI Too Long` error.
