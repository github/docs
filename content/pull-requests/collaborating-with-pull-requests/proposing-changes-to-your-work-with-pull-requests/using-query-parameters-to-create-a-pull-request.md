---
title: Using query parameters to create a pull request
intro: Use query parameters to create custom URLs to open pull requests with pre-populated fields.
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---

You can use query parameters to open pull requests. Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or a pull request template on {% data variables.product.prodname_dotcom %}. To create your own query parameters, you must match the key and value pair.

{% tip %}

**Tip:** You can also create pull request templates that open with default labels, assignees, and a pull request title. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

{% endtip %}

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to add a label to a pull request to use the `labels` query parameter. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

Query parameter | Example
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` creates a pull request that compares the base branch `main` and head branch `my-branch`. The `quick_pull=1` query brings you directly to the "Open a pull request" page.
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix` creates a pull request with the label "bug" and title "Bug fix."
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` creates a pull request with the title "Bug fix" and the comment "Describe the fix" in the pull request body.
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` creates a pull request with the labels "help wanted" and "bug".
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` creates a pull request with the milestone "testing milestones."
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` creates a pull request and assigns it to @octocat.
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` creates a pull request with the title "Bug fix" and adds it to the organization's project 1.
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` creates a pull request with a template in the pull request body. The `template` query parameter works with templates stored in a `PULL_REQUEST_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."
