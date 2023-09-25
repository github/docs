---
title: 'Error: 403 "Resource not accessible by integration"'
shortTitle: 'Resource not accessible'
intro: 'This error may be seen on pull requests created by {% data variables.product.prodname_dependabot %} and can be resolved in a couple of different ways.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}

You may see `Error: 403 "Resource not accessible by integration"` when using {% data variables.product.prodname_dependabot %}.

{% data variables.product.prodname_dependabot %} is considered untrusted when it triggers a workflow run, and the workflow will run with read-only scopes. Uploading {% data variables.product.prodname_code_scanning %} results for a branch usually requires the `security_events: write` scope. However, {% data variables.product.prodname_code_scanning %} always allows the uploading of results when the `pull_request` event triggers the action run. This is why, for {% data variables.product.prodname_dependabot %} branches, we recommend you use the `pull_request` event instead of the `push` event.

A simple approach is to run on pushes to the default branch and any other important long-running branches, as well as pull requests opened against this set of branches:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

An alternative approach is to run on all pushes except for {% data variables.product.prodname_dependabot %} branches:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

## Analysis still failing on the default branch

If the {% data variables.code-scanning.codeql_workflow %} still fails on a commit made on the default branch, you need to check:

- whether {% data variables.product.prodname_dependabot %} authored the commit
- whether the pull request that includes the commit has been merged using `@dependabot squash and merge`

This type of merge commit is authored by {% data variables.product.prodname_dependabot %} and therefore, any workflows running on the commit will have read-only permissions. If you enabled {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} security updates or version updates on your repository, we recommend you avoid using the {% data variables.product.prodname_dependabot %} `@dependabot squash and merge` command. Instead, you can enable auto-merge for your repository. This means that pull requests will be automatically merged when all required reviews are met and status checks have passed. For more information about enabling auto-merge, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)."
