---
title: Allowing your codespace to access a private image registry
intro: 'You can use secrets to allow {% data variables.product.prodname_github_codespaces %} to access a private image registry'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Private image registry
---

## About private image registries and {% data variables.product.prodname_github_codespaces %}

A registry is a secure space for storing, managing, and fetching private container images. You may use one to store one or more images. There are many examples of registries, such as {% data variables.product.prodname_container_registry %}, {% data variables.product.prodname_npm_registry %}, Azure Container Registry, or DockerHub.

{% data variables.packages.prodname_ghcr_and_npm_registry %} can be configured to allow container images to be pulled seamlessly into {% data variables.product.prodname_github_codespaces %} during codespace creation, without having to provide any authentication credentials. For other image registries, you must create secrets in {% data variables.product.prodname_dotcom %} to store the access details, which will allow {% data variables.product.prodname_github_codespaces %} to access images stored in that registry.

## Accessing images stored in {% data variables.packages.prodname_ghcr_and_npm_registry %}

{% data variables.packages.prodname_ghcr_and_npm_registry %} provide the easiest way for {% data variables.product.prodname_github_codespaces %} to consume dev container images.

For more information, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)" and "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)".

### Accessing an image published to the same repository as the codespace

If you publish a container image to {% data variables.packages.prodname_ghcr_or_npm_registry %} in the same repository that the codespace is being launched in, you will automatically be able to fetch that image on codespace creation. You won't have to provide any additional credentials, unless the **Inherit access from repo** option was unselected when the container image was published.

#### Inheriting access from the repository from which an image was published

By default, when you publish a container image to {% data variables.packages.prodname_ghcr_or_npm_registry %}, the image inherits the access setting of the repository from which the image was published. For example, if the repository is public, the image is also public. If the repository is private, the image is also private, but is accessible from the repository.

This behavior is controlled by the **Inherit access from repo** option. **Inherit access from repo** is selected by default when publishing via {% data variables.product.prodname_actions %}, but not when publishing directly to {% data variables.packages.prodname_ghcr_or_npm_registry %} using a % data variables.product.pat_generic %}.

If the **Inherit access from repo** option was not selected when the image was published, you can manually add the repository to the published container image's access controls. For more information, see "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)."

### Accessing an image published to the organization a codespace will be launched in

If you want a container image to be accessible to all codespaces in an organization, we recommend that you publish the container image with internal visibility. This will automatically make the image visible to all codespaces within the organization, unless the repository the codespace is launched from is public.

If the codespace is being launched from a public repository referencing an internal or private image, you must manually allow the public repository access to the internal container image. This prevents the internal image from being accidentally leaked publicly. For more information, see "[Ensuring Codespaces access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)."

### Accessing a private container from a subset of repositories in an organization

If you want to allow a subset of an organization's repositories to access a container image, or allow an internal or private image to be accessed from a codespace launched in a public repository, you can manually add repositories to a container <span class="x x-first x-last">image's</span> access settings. For more information, see "[Ensuring Codespaces access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">.</span>"

### Publishing a container image from a codespace

Seamless access from a codespace to {% data variables.packages.prodname_ghcr_or_npm_registry %} is limited to pulling container images. If you want to publish a container image from inside a codespace, you must use a {% data variables.product.pat_v1 %} with the `write:packages` scope.

We recommend publishing images via {% data variables.product.prodname_actions %}. For more information, see "[Publishing Docker images](/actions/publishing-packages/publishing-docker-images)" and "[Publishing Node.js packages](/actions/publishing-packages/publishing-nodejs-packages)."

## Accessing images stored in other container registries

If you are accessing a container image from a registry that isn't {% data variables.packages.prodname_ghcr_or_npm_registry %}, {% data variables.product.prodname_github_codespaces %} checks for the presence of three secrets, which define the server name, username, and {% data variables.product.pat_generic %} for a container registry. If these secrets are found, {% data variables.product.prodname_github_codespaces %} will make the registry available inside your codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

You can store secrets at the user, repository, or organization-level, allowing you to share them securely between different codespaces. When you create a set of secrets for a private image registry, you need to replace the "<*>" in the name with a consistent identifier. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" and "[Managing encrypted secrets for your repository and organization for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)."

If you are setting the secrets at the user or organization level, make sure to assign those secrets to the repository you'll be creating the codespace in by choosing an access policy from the dropdown list.  

![Image registry secret example](/assets/images/help/codespaces/secret-repository-access.png)

### Example secrets

For a private image registry in Azure, you could create the following secrets:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

For information on common image registries, see "[Common image registry servers](#common-image-registry-servers)." Note that accessing AWS Elastic Container Registry (ECR) is different.

![Image registry secret example](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Once you've added the secrets, you may need to stop and then start the codespace you are in for the new environment variables to be passed into the container. For more information, see "[Suspending or stopping a codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)."

#### Accessing AWS Elastic Container Registry

To access AWS Elastic Container Registry (ECR),  you can provide an AWS access key ID and secret key, and {% data variables.product.prodname_dotcom %}  can retrieve an access token for you and log in on your behalf.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

You must also ensure you have the appropriate AWS IAM permissions to perform the credential swap (e.g. `sts:GetServiceBearerToken`) as well as the ECR read operation (either `AmazonEC2ContainerRegistryFullAccess` or `ReadOnlyAccess`).

Alternatively, if you don't want GitHub to perform the credential swap on your behalf, you can provide an authorization token fetched via AWS's APIs or CLI.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

Since these tokens are short lived and need to be refreshed periodically, we recommend providing an access key ID and secret.

While these secrets can have any name, so long as the `*_CONTAINER_REGISTRY_SERVER` is an ECR URL, we recommend using `ECR_CONTAINER_REGISTRY_*` unless you are dealing with multiple ECR registries.

For more information, see AWS ECR's "[Private registry authentication documentation](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)."

### Common image registry servers

Some of the common image registry servers are listed below:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)

## Debugging private image registry access

If you are having trouble pulling an image from a private image registry, make sure you are able to run `docker login -u <user> -p <password> <server>`, using the values of the secrets defined above. If login fails, ensure that the login credentials are valid and that you have the apprioriate permissions on the server to fetch a container image. If login succeeds, make sure that these values are copied appropriately into the right {% data variables.product.prodname_github_codespaces %} secrets, either at the user, repository, or organization level and try again.
