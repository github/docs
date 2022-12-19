---
title: 关于 GitHub Packages 的权限
intro: 了解如何管理包的权限。
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 0159cee64d6faaeffe6257c9dc589f9fcda7a0ba
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193079'
---
{% ifversion packages-registries-v2 %} 包的权限可以将范围限定为用户、组织或存储库。

## 用户/组织作用域包的精细权限

具有精细权限的包仅限于个人用户或组织帐户。 您可以从与包相连（或链接）的仓库分别更改包的访问控制和可见性。

以下 {% data variables.product.prodname_registry %} 注册表支持精细权限。

- {% data variables.product.prodname_container_registry %} {% ifversion packages-npm-v2 %}- npm 注册表{% endif %} {% ifversion packages-nuget-v2 %}- NuGet 注册表{% endif %}

{% endif %}

## {% ifversion packages-registries-v2 %}存储库范围的{% endif %}包的权限

{% ifversion packages-registries-v2 %}存储库范围的{% endif %}包会继承拥有包的存储库的权限和可见性。 通过转到存储库的主页并单击页面右侧的“包”链接，可以找到范围限定为存储库的包。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[将存储库连接到包](/packages/learn-github-packages/connecting-a-repository-to-a-package)”。{% endif %}

{% ifversion packages-registries-v2 %}以下 {% data variables.product.prodname_registry %} 注册表仅支持存储库范围的权限。

{% ifversion not fpt or ghec %}- Docker 注册表 (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm 注册表{% endif %}
- RubyGems 注册表
- Apache Maven 注册表
- Gradle 注册表 {% ifversion packages-nuget-v2 %}{% else %}- NuGet 注册表{% endif %}

对于 {% ifversion ghes %} {% data variables.product.prodname_container_registry %}{% else %}其他注册表{% endif %}，可以选择允许将包的范围限定为用户或组织，或链接到存储库。 {% ifversion docker-ghcr-enterprise-migration %}有关迁移到 {% data variables.product.prodname_container_registry %} 的详细信息，请参阅“[从 Docker 注册表迁移到 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)”。{% endif %}

{% endif %}

{% ifversion packages-registries-v2 %}
## 容器映像的可见性和访问权限

{% data reusables.package_registry.visibility-and-access-permissions %}

有关详细信息，请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)“。

{% endif %}

## 管理包

{% data reusables.package_registry.packages-classic-pat-only %}

要使用或管理由包注册表托管的包，必须使用具有适当范围的 {% data variables.product.pat_v1 %}，并且个人帐户必须具有适当的权限。

例如：
-  要从存储库下载和安装包，你的 {% data variables.product.pat_v1 %} 必须具有 `read:packages` 范围，并且用户帐户必须具有读取权限。
- {% ifversion fpt or ghes or ghec %}要删除 {% data variables.product.product_name %} 上的包，{% data variables.product.pat_v1 %} 必须至少具有 `delete:packages` 和 `read:packages` 范围。 存储库范围的包也需要 `repo` 范围。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。{% elsif ghae %}要删除 {% data variables.product.product_name %} 上的包的指定版本，{% data variables.product.pat_v1 %} 必须具有 `delete:packages` 和 `repo` 范围。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。{% endif %}

| 作用域 | 说明 | 必需的权限 |
| --- | --- | --- |
|`read:packages`| 从 {% data variables.product.prodname_registry %} 下载和安装包 | 读取 |
|`write:packages`| 将包上传和发布到 {% data variables.product.prodname_registry %} | 写入 |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} 从 {% data variables.product.prodname_registry %} 中删除包{% elsif ghae %} 从 {% data variables.product.prodname_registry %} 从删除包的指定版本{% endif %} | 管理员 |
| `repo` | 上传和删除包（连同 `write:packages` 或 `delete:packages`）。 | 写入或管理员 |

创建 {% data variables.product.prodname_actions %} 工作流时，可使用 `GITHUB_TOKEN` 发布和安装 {% data variables.product.prodname_registry %} 中的包，无需存储和管理 {% data variables.product.pat_generic %}。

更多信息请参阅：{% ifversion fpt or ghec %}
- “[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”{% endif %}
- “[使用 {% data variables.product.prodname_actions %} 发布和安装包](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)”
- [创建 {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token/)
- “[可用的范围](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)”

## 在 {% data variables.product.prodname_actions %} 工作流程中维持对包的访问权限

为了确保工作流程将保持对包的访问，请确保在工作流程中使用正确的访问令牌，并启用了 {% data variables.product.prodname_actions %} 对包的访问权限。

有关 {% data variables.product.prodname_actions %} 的更多概念背景或在工作流中使用包的示例，请参阅“[使用 GitHub Actions 工作流管理 GitHub Packages](/packages/managing-github-packages-using-github-actions-workflows)”。

### 访问令牌  

- 要发布与工作流存储库相关联的包，请使用 `GITHUB_TOKEN`。
- 要安装与 `GITHUB_TOKEN` 无法访问的其他专用存储库相关联的包，请使用 {% data variables.product.pat_v1 %}

有关 {% data variables.product.prodname_actions %} 工作流中使用的 `GITHUB_TOKEN` 的详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

{% ifversion fpt or ghec %}
### 容器映像的 {% data variables.product.prodname_actions %} 访问权限

要确保工作流程有权访问容器映像，您必须启用 {% data variables.product.prodname_actions %} 访问运行工作流程的仓库。 您可以在包的设置页面上找到此设置。 有关详细信息，请参阅“[确保工作流访问你的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)”。

{% endif %}
