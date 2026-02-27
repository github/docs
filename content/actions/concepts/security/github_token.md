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

Before each job begins, {% data variables.product.github %} fetches an installation access token for the job. The `GITHUB_TOKEN` expires when the job finishes or after its effective maximum lifetime.

The effective maximum lifetime of the token depends on the type of runner:

* **{% data variables.product.github %}-hosted runners** The maximum job execution time is 6 hours, so the `GITHUB_TOKEN` can live for a maximum of 6 hours.
* **Self-hosted runners** The maximum job execution time is 5 days. However, because the `GITHUB_TOKEN` is an installation access token, it can only be refreshed for up to 24 hours. If your job runs longer than 24 hours, use a {% data variables.product.pat_generic %} or other authentication method instead.

The token is also available in the `github.token` context. For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts#github-context).

## When `GITHUB_TOKEN` triggers workflow runs

{% data reusables.actions.actions-do-not-trigger-workflows %}

{% data reusables.actions.actions-do-not-trigger-pages-rebuilds %}

## Next steps

* [AUTOTITLE](/actions/how-tos/security-for-github-actions/security-guides/use-github_token-in-workflows)
* [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#permissions)
