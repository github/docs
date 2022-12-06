---
title: Managing encrypted secrets for your codespaces
intro: 'You can store sensitive information, like tokens, that you want to access in your codespaces via environment variables.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
---

 


## About encrypted secrets for {% data variables.product.prodname_github_codespaces %}

You can add encrypted secrets to your personal account that you want to use in your codespaces. For example, you may want to store and access the following sensitive information as encrypted secrets.

- Access tokens to cloud services
- Service principals
- Subscription identifiers
- [Credentials for a private image registry](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

You can choose which repositories should have access to each secret. Then, you can use the secret in any codespace you create for a repository that has access to the secret. To share a secret with a codespace created from a template, you will need to publish the codespace to a repository on {% data variables.product.prodname_dotcom %}, then give that repository access to the secret.

{% data reusables.codespaces.secrets-on-start %}

### Naming secrets

{% data reusables.codespaces.secrets-naming %} For example, a secret created at the repository level must have a unique name in that repository.

  {% data reusables.codespaces.secret-precedence %}

### Limits for secrets

You can store up to 100 secrets for {% data variables.product.prodname_github_codespaces %}.

Secrets are limited to 64 KB in size.

## Adding a secret

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. To the right of "Codespaces secrets", click **New secret**.
  !["New secret" button](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Under "Name", type a name for your secret.
  !["Name" text box](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. Click **Add secret**.

## Editing a secret

You can update the value of an existing secret, and you can change which repositories can access a secret.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Codespaces secrets", to the right of the secret you want to edit, click **Update**.
  !["Update" button](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Under "Value", click **enter a new value**.
  !["enter a new value" link](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. Optionally, to remove the secret's access to a repository, deselect the repository.
  ![Checkboxes to remove access to repositories](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Click **Save changes**.

## Deleting a secret

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Codespaces secrets", to the right of the secret you want to delete, click **Delete**.
  !["Delete" button](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Read the warning, then click **OK**.
  ![Confirmation to delete secret](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Using secrets

A secret is exported as an environment variable into the user's terminal session.

  ![Displaying the value of an exported secret in the terminal](/assets/images/help/codespaces/exported-codespace-secret.png)

You can use secrets in a codespace after the codespace is built and is running. For example, a secret can be used:

* When launching an application from the integrated terminal or ssh session.
* Within a dev container lifecycle script that is run after the codespace is running. For more information about dev container lifecycle scripts, see the documentation on containers.dev: [Specification](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Codespace secrets cannot be used:

* During codespace build time (that is, within a Dockerfile or custom entry point).
* Within a dev container feature. For more information, see the `features` property in the [dev containers specification](https://containers.dev/implementors/json_reference/#general-properties) on containers.dev.

## Further reading

- "[Managing encrypted secrets for your repository and organization for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"
