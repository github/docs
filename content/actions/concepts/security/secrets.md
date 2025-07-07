---
title: Secrets
intro: Learn about secrets as they are used in {% data variables.product.prodname_actions %} workflows.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/security-for-github-actions/security-guides/about-secrets
  - /actions/concepts/security/about-secrets
---

## About secrets

Secrets allow you to store sensitive information in your organization, repository, or repository environments. Secrets are variables that you create to use in {% data variables.product.prodname_actions %} workflows in an organization, repository, or repository environment.

{% data variables.product.prodname_actions %} can only read a secret if you explicitly include the secret in a workflow.

## Organization-level secrets

{% data reusables.actions.secrets-org-level-overview %}

When creating a secret for an organization, you can use a policy to limit access by repository. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

For environment secrets, you can enable required reviewers to control access to the secrets. A workflow job cannot access environment secrets until approval is granted by required approvers.

To make a secret available to an action, you must set the secret as an input or environment variable in your workflow file. Review the action's README file to learn about which inputs and environment variables the action expects. See [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

## Limiting credential permissions

When generating credentials, we recommend that you grant the minimum permissions possible. For example, instead of using personal credentials, use [deploy keys](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys) or a service account. Consider granting read-only permissions if that's all that is needed, and limit access as much as possible.

When generating a {% data variables.product.pat_v1 %}, select the fewest scopes necessary. When generating a {% data variables.product.pat_v2 %}, select the minimum permissions and repository access required.

Instead of using a {% data variables.product.pat_generic %}, consider using a {% data variables.product.prodname_github_app %}, which uses fine-grained permissions and short lived tokens, similar to a {% data variables.product.pat_v2 %}. Unlike a {% data variables.product.pat_generic %}, a {% data variables.product.prodname_github_app %} is not tied to a user, so the workflow will continue to work even if the user who installed the app leaves your organization. For more information, see [AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow).

## Automatically redacted secrets

{% data variables.product.prodname_actions %} automatically redacts the contents of all {% data variables.product.prodname_dotcom %} secrets that are printed to workflow logs.

{% data variables.product.prodname_actions %} also redacts information that is recognized as sensitive, but is not stored as a secret. For a list of automatically redacted secrets, see [AUTOTITLE](/actions/reference/secrets-reference#automatically-redacted-secrets).

> [!NOTE] If you would like other types of sensitive information to be automatically redacted, please reach out to us in our [community discussions](https://github.com/orgs/community/discussions?discussions_q=is%3Aopen+label%3AActions).

As a habit of best practice, you should mask all sensitive information that is not a {% data variables.product.prodname_dotcom %} secret by using `::add-mask::VALUE`. This causes the value to be treated as a secret and redacted from logs. For more information about masking data, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#masking-a-value-in-a-log).

Redacting of secrets is performed by your workflow runners. This means a secret will only be redacted if it was used within a job and is accessible by the runner. If an unredacted secret is sent to a workflow run log, you should delete the log and rotate the secret. For information on deleting logs, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#deleting-logs).

## Further reading

* [AUTOTITLE](/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
* [AUTOTITLE](/rest/actions/secrets)
