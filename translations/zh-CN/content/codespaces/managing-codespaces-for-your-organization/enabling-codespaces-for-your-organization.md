---
title: 为组织启用 Codespaces
shortTitle: Enable Codespaces
intro: 您可以控制组织中的哪些用户可以使用 {% data variables.product.prodname_codespaces %}。
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145099874"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>关于为组织启用 {% data variables.product.prodname_codespaces %}

组织所有者可以控制组织中的哪些用户可以创建和使用代码空间。

要在组织中使用 Codespaces，必须执行以下操作：

- 确保用户对他们要在其中使用代码空间的存储库[至少具有写入权限](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)。 
- [为组织中的用户启用 {% data variables.product.prodname_codespaces %}](#enable-codespaces-for-users-in-your-organization)。 您可以选择允许所选用户使用 {% data variables.product.prodname_codespaces %} ，也可以选择仅允许特定用户使用。
- [设置支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- 确保您的组织未启用 IP 地址允许列表。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[管理组织允许的 IP 地址](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}”。{% else %}."{% endif %}

默认情况下，代码空间只能访问从中创建它的存储库。 如果希望组织中的代码空间能够访问代码空间创建者可以访问的其他组织存储库，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的访问和安全](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”。

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>为组织中的用户启用 {% data variables.product.prodname_codespaces %}

{% ifversion fpt %} {% note %}

注意：如果你是经过验证的教师或老师，则必须从 {% data variables.product.prodname_classroom %} 启用 {% data variables.product.prodname_codespaces %} 来使用 {% data variables.product.prodname_codespaces %} 教育权益。 有关详细信息，请参阅“[将 GitHub Codespaces 与 GitHub Classroom 配合使用](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)”。

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. 在“User permissions（用户权限）”下，选择以下选项之一：

   * “所选用户”，以选择特定组织成员使用 {% data variables.product.prodname_codespaces %}。
   * “允许所有成员”，以允许所有组织成员使用 {% data variables.product.prodname_codespaces %}。
   * “允许所有成员和外部协作者”，以允许所有组织成员以及外部协作者使用 {% data variables.product.prodname_codespaces %}。

   ![“用户权限”的单选按钮](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **注意：** 选择“允许所有成员和外部协作者”时，所有已添加到特定存储库的外部协作者都可以创建和使用 {% data variables.product.prodname_codespaces %}。 您的组织将对外部协作者发生的所有使用付费。 有关管理外部协作者的详细信息，请参阅“[关于外部协作者](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)”。

   {% endnote %}

1. 单击“ **保存**”。

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>为组织禁用 {% data variables.product.prodname_codespaces %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. 在“用户权限”下，选择“禁用”。

## <a name="setting-a-spending-limit"></a>设置支出限制

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。
