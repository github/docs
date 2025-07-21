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

{% ifversion fpt or ghec %}

## How secrets work

Secrets use [Libsodium sealed boxes](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes), so that they are encrypted before reaching {% data variables.product.github %}. This occurs when the secret is submitted [using the UI](/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) or through the [REST API](/rest/actions/secrets). This client-side encryption helps minimize the risks related to accidental logging (for example, exception logs and request logs, among others) within {% data variables.product.github %}'s infrastructure. Once the secret is uploaded, {% data variables.product.github %} is then able to decrypt it so that it can be injected into the workflow runtime.

{% endif %}

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

Because there are multiple ways a secret value can be transformed, this redaction is not guaranteed. Additionally, the runner can only redact secrets used within the current job. As a result, there are certain security proactive steps you should follow to help ensure secrets are redacted, and to limit other risks associated with secrets. For a reference list of security best practices with secrets, see [AUTOTITLE](/actions/reference/secrets-reference#security-best-practices).

## Further reading

* [AUTOTITLE](/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
* [AUTOTITLE](/rest/actions/secrets)
