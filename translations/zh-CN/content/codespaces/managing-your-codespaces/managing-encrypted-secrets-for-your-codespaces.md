---
title: 管理代码空间的加密密码
intro: 您可以在代码空间中存储要通过环境变量访问的敏感信息（如令牌）。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: 6951acb82614d35e3394a2af8e58fc8f8442ab3a
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '147419791'
---
## 关于 {% data variables.product.prodname_github_codespaces %} 的加密机密

你可以将要在 codespace 中使用的加密密码添加到你的个人帐户。 例如，您可能想要存储和访问以下敏感信息作为加密密码。

- 对云服务的个人访问令牌
- 服务主体
- 订阅标识符
- [专用映像注册表的凭据](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

您可以选择哪些仓库应有权访问每个密码。 然后，您可以在为有权访问密码的仓库创建的任何代码空间中使用该密码。

{% data reusables.codespaces.secrets-on-start %}

### 命名密钥

{% data reusables.codespaces.secrets-naming %} 例如，在仓库级别创建的密钥必须在该仓库中具有唯一的名称。

  {% data reusables.codespaces.secret-precedence %}

### 密码的限制

最多可以为 {% data variables.product.prodname_github_codespaces %} 存储 100 个密码。

密码大小限于 64 KB。

## 添加密码

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“Codespaces 机密”右侧，单击“新建机密”。
  ![“新建机密”按钮](/assets/images/help/settings/codespaces-new-secret-button.png)
1. 在“Name（名称）”下，输入密码的名称。
  ![“名称”文本框](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. 单击“添加机密”。

## 编辑密码

您可以更新现有密码的值，也可以更改哪些仓库可以访问密码。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“Codespaces 机密”下，在要编辑的机密的右侧，单击“更新”。
  ![“更新”按钮](/assets/images/help/settings/codespaces-secret-update-button.png)
1. 在“值”下，单击“输入新值”。
  ![“输入新值”链接](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. （可选）要删除密码对仓库的访问权限，请取消选择仓库。
  ![用于删除对存储库的访问权限的复选框](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. 单击“保存更改”。 

## 删除密码

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“Codespaces 机密”下，在要删除的机密的右侧，单击“删除”。
  ![“删除”按钮](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. 阅读警告，然后单击“确定”。
  ![确认删除机密](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## 使用机密

机密作为环境变量导出到用户的终端会话中。

  ![在终端显示导出机密的值](/assets/images/help/codespaces/exported-codespace-secret.png)

Codespace 生成并运行后，可以在 Codespace 中使用机密。 例如，机密可用于：

* 从集成终端或 ssh 会话启动应用程序时。
* 在 Codespace 开始运行后运行的开发容器生命周期脚本中。 有关开发容器生命周期脚本的详细信息，请参阅 containers.dev 的相关文档：[规范](https://containers.dev/implementors/json_reference/#lifecycle-scripts)。

Codespace 机密不可用于：

* Codespace 生成时（即，在 Dockerfile 或自定义入口点内）。
* 在开发容器功能内。 有关详细信息，请参阅 containers.dev 相关文档中的 `features` 属性：[规范](https://containers.dev/implementors/json_reference/#general-properties)。

## 延伸阅读

- “[管理 {% data variables.product.prodname_github_codespaces %} 的存储库和组织的加密密码](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)”
