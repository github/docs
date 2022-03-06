---
title: 关于 GitHub Packages 的权限
intro: 了解如何管理包的权限。
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 关于权限
---

{% ifversion fpt or ghec %}
包的权限要么是仓库范围，要么是用户/组织范围。
{% endif %}

## 仓库作用域包的权限

仓库作用域的包从拥有该包的仓库继承权限和可见性。 通过转到仓库的主页并单击页面右侧的 **Packages（包）**链接，您可以找到作用域为仓库的包。 {% ifversion fpt or ghec %}更多信息请参阅“[将仓库连接到包](/packages/learn-github-packages/connecting-a-repository-to-a-package)”。{% endif %}

下面的 {% data variables.product.prodname_registry %} 注册表使用仓库作用域的权限：

  {% ifversion not fpt or ghec %}- Docker 注册表 (`docker.pkg.github.com`){% endif %}
  - npm 注册表
  - RubyGems 注册表
  - Apache Maven 注册表
  - NuGet 注册表

{% ifversion fpt or ghec %}
## 用户/组织作用域包的精细权限

具有精细权限的包仅限于个人用户或组织帐户。 您可以从与包相连（或链接）的仓库分别更改包的访问控制和可见性。

目前，只有 {% data variables.product.prodname_container_registry %} 为容器映像包提供精细权限。

## 容器映像的可见性和访问权限

{% data reusables.package_registry.visibility-and-access-permissions %}

更多信息请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。

{% endif %}

## 管理包

要使用或管理由包注册表托管的包，您必须使用具有适当作用域的令牌，并且您的用户帐户必须具有适当的权限。

例如：
-  要从仓库下载和安装包，您的令牌必须具有 `read:packages` 作用域，并且您的用户帐户必须具有读取权限。
- {% ifversion fpt or ghes or ghec %}要在 {% data variables.product.product_name %}上删除软件包，您的令牌至少必须有 `delete:packages` 和 `read:packages` 作用域。 `repo` 作用域的软件包也需要存储库。{% elsif ghae %}若要删除 {% data variables.product.product_name %} 上包的指定版本，令牌必须具有 `delete:packages` 和 `repo` 作用域。{% endif %} 更多信息请参阅“[删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。

| 作用域                                                                                                                                                                               | 描述                                                      | 所需权限   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------ |
| `read:packages`                                                                                                                                                                   | 从 {% data variables.product.prodname_registry %} 下载和安装包 | 读取     |
| `write:packages`                                                                                                                                                                  | 将包上传和发布到 {% data variables.product.prodname_registry %} | 写入     |
| `delete:packages`                                                                                                                                                                 |                                                         |        |
| {% ifversion fpt or ghes or ghec %} 从 {% data variables.product.prodname_registry %} 中删除包{% elsif ghae %} 从 {% data variables.product.prodname_registry %} 从删除包的指定版本{% endif %} |                                                         |        |
| 管理员                                                                                                                                                                               |                                                         |        |
| `repo`                                                                                                                                                                            | 上传和删除包（连同 `write:packages` 或 `delete:packages`）         | 写入或管理员 |

创建 {% data variables.product.prodname_actions %} 工作流程时，您可以使用 `GITHUB_TOKEN` 发布和安装 {% data variables.product.prodname_registry %} 中的包，无需存储和管理个人访问令牌。

更多信息请参阅：{% ifversion fpt or ghec %}
- “[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”{% endif %}
- “[使用 {% data variables.product.prodname_actions %} 发布和安装包](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)”
- “[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token/)”。
- 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息

## 在 {% data variables.product.prodname_actions %} 工作流程中维持对包的访问权限

为了确保工作流程将保持对包的访问，请确保在工作流程中使用正确的访问令牌，并启用了 {% data variables.product.prodname_actions %} 对包的访问权限。

有关 {% data variables.product.prodname_actions %} 的更多概念背景或在工作流程中使用包的示例，请参阅“[使用 GitHub Actions 工作流程管理 GitHub Packages](/packages/managing-github-packages-using-github-actions-workflows)”。

### 访问令牌

- 要发布与工作流程仓库相关联的包，请使用 `GITHUB_TOKEN`。
- 要安装与 `GITHUB_TOKEN` 无法访问的其他私有仓库相关联的包，请使用个人访问令牌

有关 {% data variables.product.prodname_actions %} 工作流程中使用的 `GITHUB_TOKEN` 的更多信息，请参阅“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

{% ifversion fpt or ghec %}
### 容器映像的 {% data variables.product.prodname_actions %} 访问权限

要确保工作流程有权访问容器映像，您必须启用 {% data variables.product.prodname_actions %} 访问运行工作流程的仓库。 您可以在包的设置页面上找到此设置。 更多信息请参阅“[确保工作流程访问您的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)”。

{% endif %}
