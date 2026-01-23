---
title: Understanding GitHub secret types
intro: Learn about the usage, scope, and access permissions for {% data variables.product.github %} secrets.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: GitHub secret types
redirect_from:
  - /code-security/getting-started/understanding-github-secret-types
contentType: reference
---

{% ifversion fpt or ghec %}

## How {% data variables.product.github %} stores secrets

{% data variables.product.github %} uses [Libsodium sealed boxes](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets. A secret is encrypted before reaching {% data variables.product.github %} and remains encrypted until it's used by {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_actions %}, or {% data variables.product.prodname_codespaces %}.

{% endif %}

## {% data variables.product.prodname_dependabot %} secrets

{% data variables.product.prodname_dependabot %} secrets are used to store credentials and sensitive information for use within {% data variables.product.prodname_dependabot %}.

{% data variables.product.prodname_dependabot %} secrets are referenced in a repository's `dependabot.yml` file.

### Usage

{% data variables.product.prodname_dependabot %} secrets are typically used by {% data variables.product.prodname_dependabot %} to authenticate to private package registries. This allows {% data variables.product.prodname_dependabot %} to open pull requests to update vulnerable or outdated dependencies in private repositories. Used for authentication, these {% data variables.product.prodname_dependabot %} secrets are referenced in a repository's `dependabot.yml` file.

{% data variables.product.prodname_dependabot %} secrets can also include secrets required for workflows initiated by {% data variables.product.prodname_dependabot %}. For example, {% data variables.product.prodname_dependabot %} can trigger {% data variables.product.prodname_actions %} workflows when it creates pull requests to update dependencies, or comments on pull requests. In this case, {% data variables.product.prodname_dependabot %} secrets can be referenced from workflow files (`.github/workflows/*.yml`) as long as the workflow is triggered by a {% data variables.product.prodname_dependabot %} event.

### Scope

You can define {% data variables.product.prodname_dependabot %} secrets at:

* Repository level
* Organization level

{% data variables.product.prodname_dependabot %} secrets can be shared across repositories when set at the organization-level. You must specify which repositories in the organization can access the secret.

### Access permissions

{% data variables.product.prodname_dependabot %} secrets are accessed by {% data variables.product.prodname_dependabot %} when authenticating to private registries to update dependencies.

{% data variables.product.prodname_dependabot %} secrets are accessed by {% data variables.product.prodname_actions %} workflows when the trigger event for the workflow is initiated by {% data variables.product.prodname_dependabot %}. This is because when a workflow is initiated by {% data variables.product.prodname_dependabot %}, only {% data variables.product.prodname_dependabot %} secrets are available - Actions secrets are not accessible. Therefore, any secrets required for these workflows must be stored as {% data variables.product.prodname_dependabot %} secrets, rather than Actions secrets. There are additional security restrictions for the `pull_request_target` event. See [Limitations and restrictions](#limitations-and-restrictions).

#### User access permissions

Repository-level secrets:
* Users with **admin access** to the repository can create and manage {% data variables.product.prodname_dependabot %} secrets.
* Users with **collaborator access** to the repository can use the secret for {% data variables.product.prodname_dependabot %}.

Organization-level secrets:
* **Organization owners** can create and manage {% data variables.product.prodname_dependabot %} secrets.
* Users with **collaborator access** to the repositories with access to each secret can use the secret for {% data variables.product.prodname_dependabot %}.

### Limitations and restrictions

For workflows initiated by {% data variables.product.prodname_dependabot %}, the `pull_request_target` event is treated differently to other events. For this event, if the base ref of the pull request was created by {% data variables.product.prodname_dependabot %} (`github.event.pull_request.user.login == 'dependabot[bot]'`):

   * The workflow receives a read-only `GITHUB_TOKEN`.
   * Secrets are **not** available to the workflow.

This extra restriction helps prevent potential security risks that could arise from pull requests created by {% data variables.product.prodname_dependabot %}.

{% data variables.product.prodname_dependabot %} secrets are not passed to forks.

## Actions secrets

Actions secrets are used to store sensitive information such as API keys, authentication tokens, and other credentials in workflows.

### Usage

Actions secrets are referenced in workflow files (`.github/workflows/*.yml`).

### Scope

You can define Actions secrets at:

* Repository level
* Environment level
* Organization level

Environment-level secrets are specific to a particular environment, such as production or staging.
Actions secrets can be shared across repositories if set at the organization-level. You can use access policies to control which repositories have access to the secret.

### Access permissions

Actions secrets are only available within {% data variables.product.prodname_actions %} workflows. Despite running on Actions, {% data variables.product.prodname_dependabot %} does not have access to Actions secrets.

For workflows initiated by {% data variables.product.prodname_dependabot %}, Actions secrets are not available. These workflow secrets must be stored as {% data variables.product.prodname_dependabot %} secrets in order to be accessible to the workflow.

The location where you store the Actions secret determines its accessibility:

* Repository secret: all workflows in the repository can access the secret.
* Environment secret: secret is limited to jobs referencing that particular environment.
* Organization secret: all workflows in the repositories that have been granted access by the organization can access the organization secrets.

#### User access permissions

Repository-level and environment secrets:
* Users with **admin access** to the repository can create and manage Actions secrets.
* Users with **collaborator access** to the repository can use the secret.

Organization-level secrets:
* **Organization owners** can create and manage Actions secrets.
* Users with **collaborator access** to the repositories with access to each secret can use the secret.

### Limitations and restrictions

* Actions secrets are not available to workflows initiated by {% data variables.product.prodname_dependabot %}.
* Actions secrets are not passed to workflows that are triggered by a pull request from a fork.
* {% data variables.product.prodname_actions %} automatically redacts the contents of all {% data variables.product.github %} secrets that are printed to workflow logs.
* You can store up to 1,000 organization secrets, 100 repository secrets, and 100 environment secrets. Secrets are limited to 48 KB in size. For more information, see [Limits for secrets](/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#limits-for-secrets).

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_codespaces %} secrets

{% data variables.product.prodname_codespaces %} secrets store credentials and sensitive information, such as API tokens and SSH keys, for use within {% data variables.product.prodname_github_codespaces %}, allowing you to configure secure development environments.

### Usage

{% data variables.product.prodname_codespaces %} secrets are referenced within the {% data variables.product.prodname_codespaces %} development container configuration (`devcontainer.json`).

### Scope

You can define {% data variables.product.prodname_codespaces %} secrets at:

* User account level
* Repository level
* Organization level

For user account level secrets, you can choose which repositories have access to the secret.
{% data variables.product.prodname_codespaces %} secrets can be shared across repositories if set at the organization-level. You can use access policies to control which repositories have access to the secret.

### Access permissions

{% data variables.product.prodname_codespaces %} secrets are only accessible in {% data variables.product.prodname_codespaces %}.

{% data variables.product.prodname_actions %} cannot access {% data variables.product.prodname_codespaces %} secrets.

#### User access permissions

User account-level secrets:
* {% data variables.product.prodname_codespaces %} secrets are available to any codespace you create using repositories with access to that secret.

Repository-level secrets:
* Users with **admin access** to the repository can create and manage {% data variables.product.prodname_codespaces %} secrets.
* Users with **collaborator access** to the repository can use the secret.

Organization-level secrets:
* **Organization owners** can create and manage {% data variables.product.prodname_codespaces %} secrets.
* Users with **collaborator access** to the repositories with access to each secret can use the secret.

### Limitations and restrictions

* You can store up to 100 secrets for {% data variables.product.prodname_github_codespaces %}.
* Secrets are limited to 48 KB in size.
* {% data variables.product.prodname_codespaces %} secrets are not passed to forks.

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)
* [AUTOTITLE](/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions){% ifversion fpt or ghec %}
* [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-development-environment-secrets-for-your-repository-or-organization)
* [AUTOTITLE](/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces){% endif %}
