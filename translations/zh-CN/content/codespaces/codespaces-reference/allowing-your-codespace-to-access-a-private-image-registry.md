---
title: Allowing your codespace to access a private image registry
intro: 'You can use secrets to allow {% data variables.product.prodname_codespaces %} to access a private image registry'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

注册表是存储和管理私有容器映像（如 Azure 容器注册表或 DockerHub）的安全空间。 You can create secrets in GitHub to store the access details for a private registry and use them to give your codespace access to images stored in the registry.

When you launch a codespace, {% data variables.product.prodname_codespaces %} checks for three secrets, which define the server name, username, and personal access token (PAT) for a container registry. If these secrets are found, {% data variables.product.prodname_codespaces %} will make the registry available inside your codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

You can store secrets at the user, repository, or organization-level, allowing you to share them securely between different codespaces. When you create a set of secrets for a private image registry, you need to replace the “<*>” in the name with a consistent identifier. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" and "[Managing encrypted secrets for your repository and organization for Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)."

For example, if you had a private image registry in Azure, you could create the following secrets:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```
![映像注册表密钥示例](/assets/images/help/settings/codespaces-image-registry-secret-example.png)
