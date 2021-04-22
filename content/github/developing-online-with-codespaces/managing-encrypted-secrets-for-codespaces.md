---
title: Managing encrypted secrets for Codespaces
intro: 'You can store sensitive information, like tokens, that you want to access in your codespaces via environment variables.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% note %}

**Note:** Encrypted secrets for {% data variables.product.prodname_codespaces %} is currently in beta and subject to change.

{% endnote %}


### About encrypted secrets for {% data variables.product.prodname_codespaces %}

You can add encrypted secrets to your user account that you want to use in your codespaces. For example, you may want to store and access the following sensitive information as encrypted secrets.

- Personal access tokens to cloud services
- Service principals
- Subscription identifiers
- [Credentials for a private image registry](#allowing-your-codespace-to-access-private-images)

You can choose which repositories should have access to each secret. Then, you can use the secret in any codespace you create for a repository that has access to the secret.

### Adding a secret

{% note %}

**Note:** Tokens starting with GITHUB_ are reserved

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. To the right of "Codespaces secrets", click **New secret**.
  !["New secret" button](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Under "Name", type a name for your secret.
  !["Name" text box](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. Click **Add secret**.

### Editing a secret

You can update the value of an existing secret, and you can change which repositories can access a secret.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Codespaces secrets", to the right of the secret you want to edit, click **Update**.
  !["Update" button](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Under "Value", click **enter a new value**.
  !["enter a new value" link](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. Optionally, to remove the secret's access to a repository, deselect the repository.
  ![Checkboxes to remove access to repositories](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Click **Save changes**.

### Deleting a secret

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Codespaces secrets", to the right of the secret you want to delete, click **Delete**.
  !["Delete" button](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Read the warning, then click **OK**.
  ![Confirmation to delete secret](/assets/images/help/settings/codespaces-secret-delete-warning.png)

### Allowing your codespace to access private images

A registry is a secure space for storing and managing private container images, such as Azure Container Registry or DockerHub. By adding a secret, your codespace can access private images within the registry.

When a codespace launches, {% data variables.product.prodname_codespaces %} will check for the following three secrets, which define the server name, username, and personal access token (PAT) for the container registry. If those secrets are found, {% data variables.product.prodname_codespaces %} will make the registry available inside your codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Use the steps in "[Adding a secret](#adding-a-secret)" to add a secret for each of these items. Replace the “<*>” in the name with a consistent identifier. For example, if you had a private image registry in Azure, it might look like the following:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```
![Image registry secret example](/assets/images/help/settings/codespaces-image-registry-secret-example.png)
