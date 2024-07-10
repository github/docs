---
title: 'Error: 403 "Resource not accessible by integration"'
shortTitle: Resource not accessible
intro: 'This error may be seen on pull requests created by {% data variables.product.prodname_dependabot %} and can be resolved in a couple of different ways.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/resource-not-accessible-by-integration
---

>[!NOTE]
>This troubleshooting article is _only_ relevant if you're seeing this error with {% data variables.product.prodname_dependabot %}. If you see this error with other {% data variables.product.company_short %} products and have difficulty troubleshooting it, you can contact {% data variables.contact.github_support %}. For more information, see "[AUTOTITLE](/support/contacting-github-support)."

## About this error

```text
403: Resource not accessible by integration
```

{% data variables.product.prodname_dependabot %} is considered untrusted when it triggers a workflow run, if the workflow will run with read-only scopes.

## Confirming the cause of the error

If you're using {% data variables.product.prodname_dependabot %} in your {% data variables.product.prodname_code_scanning %} workflow, investigate the scope it's using.

Uploading {% data variables.product.prodname_code_scanning %} results for a branch usually requires the `security-events: write` scope. However, {% data variables.product.prodname_code_scanning %} always allows the uploading of results when the `pull_request` event triggers the action run. This is why, for {% data variables.product.prodname_dependabot %} branches, we recommend you use the `pull_request` event instead of the `push` event.

## Fixing the problem

You can run on pushes to the default branch and any other important long-running branches, as well as pull requests opened against this set of branches:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Alternatively, you can run on all pushes except for {% data variables.product.prodname_dependabot %} branches:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

For more information about editing the {% data variables.product.prodname_codeql %} workflow file, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#editing-a-code-scanning-workflow)."

### Analysis still failing on the default branch

If the {% data variables.code-scanning.codeql_workflow %} still fails on a commit made on the default branch, you need to check:

* whether {% data variables.product.prodname_dependabot %} authored the commit
* whether the pull request that includes the commit has been merged using `@dependabot squash and merge`

This type of merge commit is authored by {% data variables.product.prodname_dependabot %} and therefore, any workflows running on the commit will have read-only permissions. If you enabled {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} security updates or version updates on your repository, we recommend you avoid using the {% data variables.product.prodname_dependabot %} `@dependabot squash and merge` command. Instead, you can enable auto-merge for your repository. This means that pull requests will be automatically merged when all required reviews are met and status checks have passed. For more information about enabling auto-merge, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)."
