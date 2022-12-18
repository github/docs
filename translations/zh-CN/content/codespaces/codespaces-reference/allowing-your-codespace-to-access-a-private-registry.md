---
title: 允许 codespace 访问专用注册表
intro: '你可以允许 {% data variables.product.prodname_github_codespaces %} 访问专用注册表中的容器映像或其他包。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry
shortTitle: Access a private registry
ms.openlocfilehash: 2957fe914e620b63a7ba0e2c38b6a949bd632fd6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193267'
---
## 关于专用注册表和 {% data variables.product.prodname_github_codespaces %}

注册表是用于存储、管理和提取容器映像的安全空间。 注册表有许多示例，例如： 
- {% data variables.product.company_short %} 的 {% data variables.product.prodname_container_registry %}、Azure 容器注册表和用于容器映像的 DockerHub
- 用于 Node.js 包的 {% data variables.product.prodname_npm_registry %}。

某些 {% data variables.product.prodname_registry %} 注册表（包括 {% data variables.product.prodname_container_registry %}）可以配置为允许在创建 codespace 期间无缝地将容器映像拉取到 {% data variables.product.prodname_github_codespaces %} 中，而无需提供任何身份验证凭据。

若要访问其他容器映像注册表，可在 {% data variables.product.prodname_dotcom %} 中创建机密以存储访问详细信息，这将允许 {% data variables.product.prodname_github_codespaces %} 访问存储在该注册表中的映像。

## 使用精细权限访问存储在注册表中的包

支持精细权限的 {% data variables.product.prodname_registry %} 注册表（包括 {% data variables.product.prodname_container_registry %}）为 {% data variables.product.prodname_github_codespaces %} 使用包提供了最简单的方法。 有关支持精细权限和无缝 {% data variables.product.prodname_github_codespaces %} 访问的 {% data variables.product.prodname_registry %} 注册表的列表，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)”。

### 访问发布到与 codespace 相同的存储库的映像

如果在启动 codespace 的同一存储库中发布包，你将能够在创建 codespace 时自动提取该包。 无需提供任何其他凭据，除非在发布包时未选中“从存储库继承访问权限”选项。

#### 从发布包的存储库继承访问权限

默认情况下，包继承发布它的存储库的访问设置。 例如，如果存储库是公共的，则包也是公共的。 如果存储库是私有的，则包也是私有的，但可以从存储库访问。

此行为由“从存储库继承访问权限”选项控制。 通过 {% data variables.product.prodname_actions %} 发布时，默认情况下会选择“从存储库继承访问权限”，但在使用 {% data variables.product.pat_generic %} 直接发布到注册表时，不会选择该选项。

如果在发布包时未选择“从存储库继承访问权限”选项，则可以手动将存储库添加到已发布包的访问控制中。 有关详细信息，请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)”。

### 访问发布到组织、codespace 将在其中启动的包

如果希望组织中的所有 codespace 都可以访问包，建议发布具有内部可见性的包。 这将自动使包对组织内的所有 codespace 可见，除非从中启动 codespace 的存储库是公开的。

如果 codespace 是从引用内部或专用包的公共存储库启动的，则必须手动允许公共存储库访问内部包。 这可以防止内部包意外公开泄露。 有关详细信息，请参阅“[确保 Codespace 访问你的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)”。

### 从组织中存储库的子集访问专用包

如果要允许组织的存储库子集访问包，或者允许从在公共存储库中启动的 codespace 访问内部或专用包，则可以手动将存储库添加到包的访问设置。 有关详细信息，请参阅“[确保 Codespace 访问你的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)”。

### 从 codespace 发布包

从 codespace 到注册表的无缝访问仅限于拉取包。 如果要从 codespace 内部发布包，则必须结合使用 {% data variables.product.pat_v1 %} 与 `write:packages` 作用域。

我们建议通过 {% data variables.product.prodname_actions %} 发布包。 有关详细信息，请参阅“[发布 Docker 映像](/actions/publishing-packages/publishing-docker-images)”和“[发布 Node.js 包](/actions/publishing-packages/publishing-nodejs-packages)”。

## 访问存储在其他注册表中的映像

可以定义机密以允许 {% data variables.product.prodname_github_codespaces %} 访问除 {% data variables.product.company_short %} 的 {% data variables.product.prodname_container_registry %} 以外的容器映像注册表。 如果要从不支持无缝访问的注册表访问容器映像，{% data variables.product.prodname_github_codespaces %} 将检查是否存在三个机密，这些机密定义了容器注册表的服务器名称、用户名和 {% data variables.product.pat_generic %}。 如果找到这些密钥，{% data variables.product.prodname_github_codespaces %} 将在 codespace 中提供注册表。

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

您可以在用户、仓库或组织级别存储密钥，从而在不同的代码空间之间安全地共享它们。 当您为私有映像注册表创建一组密钥时，您需要用一致的标识符替换名称中的 “<*>”。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”和“[管理 {% data variables.product.prodname_github_codespaces %} 的存储库和组织的加密机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)”。

如果您在用户或组织级别设置机密，请确保将这些机密分配到仓库，您将从下拉列表中选择访问策略来创建代码空间。  

![映像注册表密钥示例](/assets/images/help/codespaces/secret-repository-access.png)

### 示例机密

如果您在 Azure 中拥有私有映像注册表，则可以创建以下机密：

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

有关通用映像注册表的信息，请参阅“[通用映像注册表服务器](#common-image-registry-servers)”。 请注意，访问 AWS Elastic Container Registry (ECR) 是不同的。

![映像注册表密钥示例](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

添加机密后，您可能需要停止并启动您所在的代码空间，以便将新的环境变量传递到容器。 有关详细信息，请参阅“[暂停或停止 codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)”。

#### 访问 AWS Elastic Container Registry

要访问 AWS 弹性容器注册表 (ECR)，您可以提供 AWS 访问密钥 ID 和私有密钥，{% data variables.product.prodname_dotcom %}  可以为您检索访问令牌并代表您登录。

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

你还必须确保具有适当的 AWS IAM 权限来执行凭据交换（例如 `sts:GetServiceBearerToken`）以及 ECR 读取操作（`AmazonEC2ContainerRegistryFullAccess` 或 `ReadOnlyAccess`）。

或者，如果您不希望 GitHub 代表您执行凭证交换，则可以提供通过 AWS 的 API 或 CLI 获取的授权令牌。

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

由于这些令牌的生存期较短，需要定期刷新，因此我们建议提供访问密钥 ID 和机密。

尽管这些机密可以具有任何名称，但只要 `*_CONTAINER_REGISTRY_SERVER` 是 ECR URL，仍建议使用 `ECR_CONTAINER_REGISTRY_*`，除非你正在处理多个 ECR 注册表。

有关详细信息，请参阅 AWS ECR 的“[专用注册表身份验证文档](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)”。

### 通用映像注册表服务器

下面列出了一些通用映像注册表服务器：

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub 容器注册表](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure 容器注册表](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS 弹性容器注册表](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud 容器注册表](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US)、`eu.gcr.io` (EU)、`asia.gcr.io` (Asia)

## 调试私有映像注册表访问

如果在从专用映像注册表中提取映像时遇到问题，请确保能够使用上述机密值运行 `docker login -u <user> -p <password> <server>`。 如果登录失败，请确保登录凭据有效，并且你在服务器上具有提取容器映像的适当权限。 如果登录成功，请确保将这些值适当地复制到正确的 {% data variables.product.prodname_github_codespaces %} 机密中，无论是在用户、仓储库还是组织级别，然后重试。
