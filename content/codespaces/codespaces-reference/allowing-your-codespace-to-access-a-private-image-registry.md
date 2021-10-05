---
title: Allowing your codespace to access a private image registry
intro: 'You can use secrets to allow {% data variables.product.prodname_codespaces %} to access a private image registry'
versions:
  fpt: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Private image registry
---

## About private image registries and {% data variables.product.prodname_codespaces %}

A registry is a secure space for storing and managing private container images, such as Azure Container Registry or DockerHub. You can create secrets in GitHub to store the access details for a private registry and use them to give your codespace access to images stored in the registry.

When you launch a codespace, {% data variables.product.prodname_codespaces %} checks for three secrets, which define the server name, username, and personal access token (PAT) for a container registry. If these secrets are found, {% data variables.product.prodname_codespaces %} will make the registry available inside your codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

You can store secrets at the user, repository, or organization-level, allowing you to share them securely between different codespaces. When you create a set of secrets for a private image registry, you need to replace the “<*>” in the name with a consistent identifier. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" and "[Managing encrypted secrets for your repository and organization for Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)."

If you are setting the secrets at the user or organization level, make sure to assign those secrets to the repository you'll be creating the codespace in by choosing an access policy from the dropdown list.  

![Image registry secret example](/assets/images/help/codespaces/secret-repository-access.png)

## Example secrets

For a private image registry in Azure, you could create the following secrets:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

For information on common image registries, see "[Common image registry servers](#common-image-registry-servers)."

![Image registry secret example](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Once you've added the secrets, you may need to stop and then start the codespace you are in for the new environment variables to be passed into the container. For more information, see "[Suspending or stopping a codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)."

## Common image registry servers

Some of the common image registry servers are listed below:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [Amazon Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)