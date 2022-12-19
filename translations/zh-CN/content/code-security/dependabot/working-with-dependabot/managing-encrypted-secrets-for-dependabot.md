---
title: 管理 Dependabot 的加密密码
intro: '您可以将敏感信息（如密码和访问令牌）存储为加密密码，然后在 {% data variables.product.prodname_dependabot %} 配置文件中引用它们。'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
ms.openlocfilehash: 94b9e4c1945385ee9abca9cc548b159231e212c3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106371'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## 关于 {% data variables.product.prodname_dependabot %} 的加密机密

{% data variables.product.prodname_dependabot %} 密码是您在组织级别或仓库级别创建的加密凭据。
当您在组织级别添加密码时，可以指定哪些仓库可以访问该密码。 您可以使用密码允许 {% data variables.product.prodname_dependabot %} 更新位于私人包注册表中的依赖项。 添加密码时，它会在到达 {% data variables.product.prodname_dotcom %} 之前进行加密，并且保持加密到 {% data variables.product.prodname_dependabot %} 用于访问私有包注册表。

添加 {% data variables.product.prodname_dependabot %} 机密后，可在 dependabot.yml 配置文件中引用它，如下所示：{% raw %}`${{secrets.NAME}}`{% endraw %}，其中“NAME”是为机密选择的名称。 例如： 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

有关详细信息，请参阅“[dependabot.yml 文件的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)”。

### 命名您的密码

{% data variables.product.prodname_dependabot %} 密码的名称：
* 只能包含字母数字字符（`[A-Z]`、`[0-9]`）或下划线 (`_`)。 不允许空格。 如果您输入小写字母，这些字母将更改为大写字母。
* 不得以 `GITHUB_` 前缀开头。
* 不能以数字开头。

## 为 {% data variables.product.prodname_dependabot %} 添加仓库密码

{% data reusables.actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.dependabot.sidebar-secret %}
1. 单击“新建存储库机密”。
1. 在“名称”输入框中键入机密名称。
1. 输入密码的值。
1. 单击“添加机密”。

   密码名称列在 Dependabot 密码页面上。 可单击“更新”来更改机密值。 可单击“删除”来删除机密。

   ![更新或删除仓库密码](/assets/images/help/dependabot/update-remove-repo-secret.png)

## 将组织机密添加到 {% data variables.product.prodname_dependabot %}

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.dependabot.sidebar-secret %}
1. 单击“新建组织机密”。
1. 在“名称”输入框中键入机密名称。
1. 输入“机密”的值。
1. 从“存储库访问”下拉列表中，选择访问策略。
1. 如果选择“选定的存储库”：

   * 单击 {% octicon "gear" aria-label="The Gear icon" %}。
   * 选择可以访问此机密的仓库。 
     ![为此机密选择存储库](/assets/images/help/dependabot/secret-repository-access.png)
   * 单击“更新选择”。

1. 单击“添加机密”。

   密码名称列在 Dependabot 密码页面上。 可单击“更新”以更改机密值或其访问策略。 可单击“删除”来删除机密。

   ![更新或删除组织机密](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## 将 {% data variables.product.prodname_dependabot %} 添加到您的注册表 IP 允许列表

如果专用注册表配置了 IP 允许列表，则可在 `dependabot` 键下找到用于访问元 API 终结点中的注册表的 IP 地址 {% data variables.product.prodname_dependabot %}。 有关详细信息，请参阅“[Meta](/rest/reference/meta)”。
