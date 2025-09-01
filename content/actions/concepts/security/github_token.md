---
title: GITHUB_TOKEN
intro: Learn what `GITHUB_TOKEN` is, how it works, and why it matters for secure automation in {% data variables.product.prodname_actions %} workflows.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About the `GITHUB_TOKEN`

At the start of each workflow job, {% data variables.product.prodname_dotcom %} automatically creates a unique `GITHUB_TOKEN` secret to use in your workflow. You can use the `GITHUB_TOKEN` to authenticate in the workflow job.

When you enable {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} installs a {% data variables.product.prodname_github_app %} on your repository. The `GITHUB_TOKEN` secret is a {% data variables.product.prodname_github_app %} installation access token. You can use the installation access token to authenticate on behalf of the {% data variables.product.prodname_github_app %} installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#permissions).

Before each job begins, {% data variables.product.prodname_dotcom %} fetches an installation access token for the job. {% data reusables.actions.github-token-expiration %}

The token is also available in the `github.token` context. For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts#github-context).

## When `GITHUB_TOKEN` triggers workflow runs

{% data reusables.actions.actions-do-not-trigger-workflows %}

{% data reusables.actions.actions-do-not-trigger-pages-rebuilds %}

## Next steps

* [AUTOTITLE](/actions/how-tos/security-for-github-actions/security-guides/use-github_token-in-workflows)
* [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#permissions)
