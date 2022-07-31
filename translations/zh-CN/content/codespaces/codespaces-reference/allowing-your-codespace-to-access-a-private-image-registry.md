---
title: 允许代码空间访问私有映像注册表
intro: '您可以使用密钥允许 {% data variables.product.prodname_github_codespaces %} 访问私有映像注册表'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: 私有映像注册表
---

## 关于私人映像注册表和 {% data variables.product.prodname_github_codespaces %}

注册表是用于存储、管理和提取专用容器映像的安全空间。 您可以使用一个来存储一个或多个映像。 注册表的示例很多，例如 {% data variables.product.prodname_dotcom %} 容器注册表、Azure 容器注册表或 DockerHub。

{% data variables.product.prodname_dotcom %} 容器注册表可以配置为无缝拉取容器映像，而无需向 {% data variables.product.prodname_github_codespaces %} 提供任何身份验证凭据。 对于其他映像注册表，必须在 {% data variables.product.prodname_dotcom %} 中创建机密以存储访问详细信息，这将允许 {% data variables.product.prodname_codespaces %} 访问存储在该注册表中的映像。

## 访问存储在 {% data variables.product.prodname_dotcom %} 容器注册表中的映像

{% data variables.product.prodname_dotcom %} 容器注册表是 {% data variables.product.prodname_codespaces %} 使用 devcontainer 容器映像的最简单方法。

更多信息请参阅“[使用容器注册表](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”。

### 访问发布到与代码空间相同的仓库的映像

如果将容器映像发布到启动代码空间的同一仓库中的 {% data variables.product.prodname_dotcom %} 容器注册表，则在创建代码空间时将自动能够获取该映像。 无需提供任何其他凭据，除非在发布容器映像时未选中 **Inherit access from repo（从仓库继承访问权限）**选项。

#### 从发布映像的仓库继承访问权限

默认情况下，将容器映像发布到 {% data variables.product.prodname_dotcom %} 容器注册表时，该映像将继承从中发布映像的仓库的访问设置。 例如，如果仓库是公共的，则映像也是公共的。 如果仓库是私有的，则映像也是私有的，但可以从仓库访问。

此行为由 **Inherit access from repo（从仓库继承访问权限）**选项控制。 **通过** {% data variables.product.prodname_actions %} 发布时，默认情况下会选择从仓库继承访问权限，但在使用个人访问令牌 (PAT) 直接发布到 {% data variables.product.prodname_dotcom %} 容器注册表时，不会选择从仓库继承访问权限。

如果在发布映像时未选择 **Inherit access from repo（从仓库继承访问权限）**选项，则可以手动将仓库添加到已发布容器映像的访问控制中。 更多信息请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)”。

### 访问发布到组织、代码空间将在 其中启动的映像

如果希望组织中的所有代码空间都可以访问容器映像，建议发布具有内部可见性的容器映像。 这将自动使映像对组织内的所有代码空间可见，除非从中启动代码空间的仓库是公开的。

如果代码空间是从引用内部或私有映像的公共公共仓库启动的，则必须手动允许公共公共仓库访问内部容器映像。 这可以防止内部映像意外公开泄露。 更多信息请参阅“[确保 Codespaces 访问您的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)”。

### 从组织中仓库的子集访问私有容器

如果要允许组织的仓库子集访问容器映像，或者允许从在公共仓库中启动的代码空间访问内部或私有映像，则可以手动将仓库添加到容器<span class="x x-first x-last">映像的</span>访问设置。 更多信息请参阅“[确保 Codespaces 访问您的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">。</span>”

### 从代码空间发布容器映像

从代码空间到容器注册表 {% data variables.product.prodname_dotcom %} 的无缝访问仅限于拉取容器映像。 如果要从代码空间内部发布容器映像，则必须结合使用个人访问令牌 (PAT) 与 `write:packages` 作用域。

我们建议通过 {% data variables.product.prodname_actions %} 发布映像。 更多信息请参阅“[发布 Docker 映像](/actions/publishing-packages/publishing-docker-images)”。

## 访问存储在其他容器注册表中的映像

如果要从不是 {% data variables.product.prodname_dotcom %} 容器注册表的注册表访问容器映像，{% data variables.product.prodname_codespaces %} 将检查是否存在三个机密，这些机密定义了容器注册表的服务器名称、用户名和个人访问令牌 (PAT)。 如果找到这些密钥，{% data variables.product.prodname_github_codespaces %} 将在代码空间中提供注册表。

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

您可以在用户、仓库或组织级别存储密钥，从而在不同的代码空间之间安全地共享它们。 当您为私有映像注册表创建一组密钥时，您需要用一致的标识符替换名称中的 “<*>”。 更多信息请参阅“[管理代码空间的加密密码](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”和“[管理 {% data variables.product.prodname_github_codespaces %} 的仓库和组织加密密码](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)”。

如果您在用户或组织级别设置机密，请确保将这些机密分配到仓库，您将从下拉列表中选择访问策略来创建代码空间。

![映像注册表密钥示例](/assets/images/help/codespaces/secret-repository-access.png)

### 示例机密

如果您在 Azure 中拥有私有映像注册表，则可以创建以下机密：

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

有关通用映像注册表的信息，请参阅“[通用映像注册表服务器](#common-image-registry-servers)”。 请注意，访问 AWS Elastic Container Registry (ECR) 是不同的。

![映像注册表密钥示例](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

添加机密后，您可能需要停止并启动您所在的代码空间，以便将新的环境变量传递到容器。 更多信息请参阅“[暂停或停止代码空间](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)”。

#### 访问 AWS Elastic Container Registry

要访问 AWS 弹性容器注册表 (ECR)，您可以提供 AWS 访问密钥 ID 和私有密钥，{% data variables.product.prodname_dotcom %}  可以为您检索访问令牌并代表您登录。

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

您还必须确保拥有适当的 AWS IAM 权限来执行凭证交换（例如 `sts:GetServiceBearerToken`）以及 ECR 读取操作（ `AmazonEC2ContainerRegistryFullAccess` 或 `ReadOnlyAccess`）。

或者，如果您不希望 GitHub 代表您执行凭证交换，则可以提供通过 AWS 的 API 或 CLI 获取的授权令牌。

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

由于这些令牌的生存期较短，需要定期刷新，因此我们建议提供访问密钥 ID 和机密。

虽然这些机密可以具有任何名称，但只要 `*_CONTAINER_REGISTRY_SERVER` 是 ECR URL，我们建议您使用 `ECR_CONTAINER_REGISTRY_*`，除非您正在处理多个 ECR 注册表。

更多信息请参阅 AWS ECR 的“[私人注册表身份验证文档](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)”。

### 通用映像注册表服务器

下面列出了一些通用映像注册表服务器：

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)

## 调试私有映像注册表访问

如果在从私有映像注册表中拉取映像时遇到问题，请确保能够使用上面定义的机密的值运行 `docker login -u <user> -p <password> <server>`。 如果登录失败，请确保登录凭据有效，并且您在服务器上具有提取容器映像的适当权限。 如果登录成功，请确保将这些值适当地复制到正确的 {% data variables.product.prodname_codespaces %} 机密中，无论是在用户、仓库还是组织级别，然后重试。
