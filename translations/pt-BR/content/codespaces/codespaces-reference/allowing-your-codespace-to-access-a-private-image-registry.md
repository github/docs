---
title: Permitir que seu codespace acesse um registro de imagens privadas
intro: 'Você pode usar segredos para permitir que {% data variables.product.prodname_codespaces %} acesse um registro de imagens privada'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Registro de imagem privada
---

## Sobre registros de imagens privadas e {% data variables.product.prodname_codespaces %}

A registry is a secure space for storing, managing, and fetching private container images. You may use one to store one or more devcontainers. There are many examples of registries, such as {% data variables.product.prodname_dotcom %} Container Registry, Azure Container Registry, or DockerHub.

{% data variables.product.prodname_dotcom %} Container Registry can be configured to pull container images seamlessly, without having to provide any authentication credentials to {% data variables.product.prodname_codespaces %}. For other image registries, you must create secrets in {% data variables.product.prodname_dotcom %} to store the access details, which will allow {% data variables.product.prodname_codespaces %} to access images stored in that registry.

## Accessing images stored in {% data variables.product.prodname_dotcom %} Container Registry

{% data variables.product.prodname_dotcom %} Container Registry is the easiest way for {% data variables.product.prodname_github_codespaces %} to consume devcontainer container images.

For more information, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

### Accessing an image published to the same repository as the codespace

If you publish a container image to {% data variables.product.prodname_dotcom %} Container Registry in the same repository that the codespace is being launched in, you will automatically be able to fetch that image on codespace creation. You won't have to provide any additional credentials, unless the **Inherit access from repo** option was unselected when the container image was published.

#### Inheriting access from the repository from which an image was published

By default, when you publish a container image to {% data variables.product.prodname_dotcom %} Container Registry, the image inherits the access setting of the repository from which the image was published. For example, if the repository is public, the image is also public. If the repository is private, the image is also private, but is accessible from the repository.

This behavior is controlled by the **Inherit access from repo** option. **Inherit access from repo** is selected by default when publishing via {% data variables.product.prodname_actions %}, but not when publishing directly to {% data variables.product.prodname_dotcom %} Container Registry using a Personal Access Token (PAT).

If the **Inherit access from repo** option was not selected when the image was published, you can manually add the repository to the published container image's access controls. Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)".

### Accessing an image published to the organization a codespace will be launched in

If you want a container image to be accessible to all codespaces in an organization, we recommend that you publish the container image with internal visibility. This will automatically make the image visible to all codespaces within the organization, unless the repository the codespace is launched from is public.

If the codespace is being launched from a public repository referencing an internal or private image, you must manually allow the public repository access to the internal container image. This prevents the internal image from being accidentally leaked publicly. For more information, see "[Ensuring Codespaces access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)."

### Accessing a private container from a subset of repositories in an organization

If you want to allow a subset of an organization's repositories to access a container image, or allow an internal or private image to be accessed from a codespace launched in a public repository, you can manually add repositories to a container <span class="x x-first x-last">image's</span> access settings. For more information, see "[Ensuring Codespaces access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">.</span>"

### Publishing a container image from a codespace

Seamless access from a codespace to {% data variables.product.prodname_dotcom %} Container Registry is limited to pulling container images. If you want to publish a container image from inside a codespace, you must use a personal access token (PAT) with the `write:packages` scope.

We recommend publishing images via {% data variables.product.prodname_actions %}. For more information, see "[Publishing Docker images](/actions/publishing-packages/publishing-docker-images)."

## Accessing images stored in other container registries

If you are accessing a container image from a registry that isn't {% data variables.product.prodname_dotcom %} Container Registry, {% data variables.product.prodname_codespaces %} checks for the presence of three secrets, which define the server name, username, and personal access token (PAT) for a container registry. Se estes segredos forem encontrados, {% data variables.product.prodname_codespaces %} disponibilizará o registro dentro do seu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

É possível armazenar segredos a nível do usuário, repositório ou organização, permitindo que você os compartilhe de forma segura entre diferentes codespaces. When you create a set of secrets for a private image registry, you need to replace the "<*>" in the name with a consistent identifier. Para mais informações, consulte "[Gerenciar segredos criptografados para seus códigos](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" e "[Gerenciar segredos criptografados para seu repositório e organização para os codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)".

Se você estiver definindo os segredos no nível do usuário ou da organização. certifique-se de atribuir esses segredos para o repositório no qual você irá criar o codespace, escolhendo uma política de acesso na lista suspensa.

![Exemplo de segredo do registro de imagem](/assets/images/help/codespaces/secret-repository-access.png)

### Exemplos de segredos

Para uma lista de imagens privadas no Azure, você pode criar os seguintes segredos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

Para obter informações sobre registros de imagens comuns, consulte "[Servidores de registro de imagens comuns](#common-image-registry-servers)".

![Exemplo de segredo do registro de imagem](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Após adicionar os segredos, pode ser que você precise parar e, em seguida, iniciar o processo de codespace para que as novas variáveis de ambiente sejam passadas para o contêiner. Para obter mais informações, consulte "[Suspender ou interromper um codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

### Servidores de registro de imagens comuns

Alguns dos servidores comuns de registro de imagens estão listados abaixo:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [Registro de Contêiner do GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Registro do Contêiner do Azure](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Registro de Contêiner do Google Cloud](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)

#### Accessing AWS Elastic Container Registry

If you want to access AWS Elastic Container Registry (ECR), you must provide an AWS authorization token in the `ECR_CONTAINER_REGISTRY_PASSWORD`. This authorization token is not the same as your secret key. You can obtain an AWS authorization token by using AWS's APIs or CLI. These tokens are short lived and will need to be refreshed periodically. For more information, see AWS ECR's "[Private registry authentication documentation](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)."
