---
title: 允许代码空间访问私有映像注册表
intro: '您可以使用密钥允许 {% data variables.product.prodname_codespaces %} 访问私有映像注册表'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: 私有映像注册表
---

## 关于私人映像注册表和 {% data variables.product.prodname_codespaces %}

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

If the **Inherit access from repo** option was not selected when the image was published, you can manually add the repository to the published container image's access controls. 更多信息请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)”。

### Accessing an image published to the organization a codespace will be launched in

If you want a container image to be accessible to all codespaces in an organization, we recommend that you publish the container image with internal visibility. This will automatically make the image visible to all codespaces within the organization, unless the repository the codespace is launched from is public.

If the codespace is being launched from a public repository referencing an internal or private image, you must manually allow the public repository access to the internal container image. This prevents the internal image from being accidentally leaked publicly. For more information, see "[Ensuring Codespaces access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)."

### Accessing a private container from a subset of repositories in an organization

If you want to allow a subset of an organization's repositories to access a container image, or allow an internal or private image to be accessed from a codespace launched in a public repository, you can manually add repositories to a container <span class="x x-first x-last">image's</span> access settings. For more information, see "[Ensuring Codespaces access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">.</span>"

### Publishing a container image from a codespace

Seamless access from a codespace to {% data variables.product.prodname_dotcom %} Container Registry is limited to pulling container images. If you want to publish a container image from inside a codespace, you must use a personal access token (PAT) with the `write:packages` scope.

We recommend publishing images via {% data variables.product.prodname_actions %}. For more information, see "[Publishing Docker images](/actions/publishing-packages/publishing-docker-images)."

## Accessing images stored in other container registries

If you are accessing a container image from a registry that isn't {% data variables.product.prodname_dotcom %} Container Registry, {% data variables.product.prodname_codespaces %} checks for the presence of three secrets, which define the server name, username, and personal access token (PAT) for a container registry. 如果找到这些密钥，{% data variables.product.prodname_codespaces %} 将在代码空间中提供注册表。

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

您可以在用户、仓库或组织级别存储密钥，从而在不同的代码空间之间安全地共享它们。 当您为私有映像注册表创建一组密钥时，您需要用一致的标识符替换名称中的 “<*>”。 更多信息请参阅“[管理代码空间的加密密码](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”和“[管理代码空间的仓库和组织加密密码](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)“。

如果您在用户或组织级别设置机密，请确保将这些机密分配到仓库，您将从下拉列表中选择访问策略来创建代码空间。

![映像注册表密钥示例](/assets/images/help/codespaces/secret-repository-access.png)

### 示例机密

如果您在 Azure 中拥有私有映像注册表，则可以创建以下机密：

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

有关通用映像注册表的信息，请参阅“[通用映像注册表服务器](#common-image-registry-servers)”。

![映像注册表密钥示例](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

添加机密后，您可能需要停止并启动您所在的代码空间，以便将新的环境变量传递到容器。 更多信息请参阅“[暂停或停止代码空间](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)”。

### 通用映像注册表服务器

下面列出了一些通用映像注册表服务器：

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)

#### 访问 AWS Elastic Container Registry

如果您想要访问 AWS Elastic Container Registry (ECR)，必须在 `ECR_CONTAINER_REGISTRY_PASSSWORD` 中提供一个 AWS 授权令牌。 此授权令牌与您的密钥不相同。 您可以使用 AWS 的 API 或 CLI 获得AWS 授权令牌。 这些令牌寿命短，需要定期刷新。 For more information, see AWS ECR's "[Private registry authentication documentation](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)."
