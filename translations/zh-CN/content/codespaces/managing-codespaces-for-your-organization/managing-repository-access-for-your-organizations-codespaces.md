---
title: 管理组织代码空间的存储库访问
shortTitle: Repository access
intro: '你可以管理 {% data variables.product.prodname_github_codespaces %} 可以访问的组织中的存储库。'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: 9fdec24104a61170977053195446db0b4cf0a62f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159525'
---
{% warning %}

**停用说明**：下方描述的访问和安全设置现已停用，此处记录仅为参考。 若要启用对其他存储库的扩展访问权限，请将请求的权限添加到 `devcontainer.json` 配置文件。 有关详细信息，请参阅“[管理对 codespace 内其他存储库的访问权限](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。

{% endwarning %}

默认情况下，代码空间只能访问创建它的仓库。 当您为组织拥有的存储库启用访问和安全性时，为该存储库创建的任何代码空间也将对组织拥有的所有其他存储库具有读取权限，并且代码空间创建者具有访问权限。 如果要限制代码空间可以访问的存储库，可以将其限制为创建代码空间的存储库或特定存储库。 您应该只对您信任的仓库启用访问和安全。

要管理组织中的哪些用户可以使用 {% data variables.product.prodname_github_codespaces %}，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)”。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. 在“Access and security（访问和安全）”下，为组织选择所需的设置。
  ![管理受信任存储库的单选按钮](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. 如果选择了“所选存储库”，请选择下拉菜单，然后单击一个存储库，以允许该存储库的 codespace 访问组织拥有的其他存储库。 对于您要允许其代码空间访问其他仓库的所有仓库重复此操作。
    ![“所选存储库”下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## 延伸阅读

- [管理 codespace 的存储库访问](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)
