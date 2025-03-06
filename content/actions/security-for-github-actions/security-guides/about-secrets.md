---
title: About secrets
intro: 'Learn about secrets as they''re used in GitHub Actions.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About secrets

Secrets allow you to store sensitive information in your organization, repository, or repository environments. Secrets are variables that you create to use in {% data variables.product.prodname_actions %} workflows in an organization, repository, or repository environment.

{% data variables.product.prodname_actions %} can only read a secret if you explicitly include the secret in a workflow.

## Naming your secrets

>[!TIP]
> To help ensure that {% data variables.product.prodname_dotcom %} redacts your secrets in logs correctly, avoid using structured data as the values of secrets.

The following rules apply to secret names:

{% data reusables.actions.actions-secrets-and-variables-naming %}

{% data reusables.codespaces.secret-precedence %} Similarly, if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence.

## Using your secrets in workflows

{% data reusables.actions.secrets-redaction-warning %}

{% data reusables.actions.secrets-org-level-overview %}

For environment secrets, you can enable required reviewers to control access to the secrets. A workflow job cannot access environment secrets until approval is granted by required approvers.

To make a secret available to an action, you must set the secret as an input or environment variable in your workflow file. Review the action's README file to learn about which inputs and environment variables the action expects. See [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts.

## Limiting credential permissions

When generating credentials, we recommend that you grant the minimum permissions possible. For example, instead of using personal credentials, use [deploy keys](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys) or a service account. Consider granting read-only permissions if that's all that is needed, and limit access as much as possible.

When generating a {% data variables.product.pat_v1 %}, select the fewest scopes necessary. When generating a {% data variables.product.pat_v2 %}, select the minimum permissions and repository access required.

Instead of using a {% data variables.product.pat_generic %}, consider using a {% data variables.product.prodname_github_app %}, which uses fine-grained permissions and short lived tokens, similar to a {% data variables.product.pat_v2 %}. Unlike a {% data variables.product.pat_generic %}, a {% data variables.product.prodname_github_app %} is not tied to a user, so the workflow will continue to work even if the user who installed the app leaves your organization. For more information, see [AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow).

## Further reading

* [AUTOTITLE](/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
* [AUTOTITLE](/rest/actions/secrets)
