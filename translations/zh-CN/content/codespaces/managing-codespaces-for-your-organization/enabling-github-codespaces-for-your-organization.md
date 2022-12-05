---
title: 为组织启用 GitHub Codespaces
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: '你可以控制组织中的哪些用户可以使用 {% data variables.product.prodname_github_codespaces %}（费用由组织承担）。'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 992d744e04ae00db4d760b59a9d08d1700846998
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158899'
---
## 关于为组织启用 {% data variables.product.prodname_github_codespaces %}

组织所有者可以控制组织中的哪些用户可以创建和使用 codespace（费用由组织承担）。 有关定价的信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

只有可以将更改推送到存储库或创建存储库分支的人才能为该存储库创建 codespace。 若要允许人们为组织拥有的存储库创建 codespace，必须：

- 确保用户对他们要在其中使用代码空间的存储库至少具有写入权限。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)”。
- 确保您的组织未启用 IP 地址允许列表。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[管理组织允许的 IP 地址](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}”。{% else %}."{% endif %}

若要允许人们创建会对组织进行计费的 codespace，必须：

- [设置支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [选择可以创建会对组织进行计费的 codespace 的人员](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

注意：如果你是经过验证的教师或老师，则必须从 {% data variables.product.prodname_classroom %} 启用 {% data variables.product.prodname_github_codespaces %} 来使用 {% data variables.product.prodname_codespaces %} 教育权益。 有关详细信息，请参阅“[将 {% data variables.product.prodname_github_codespaces %} 与 {% data variables.product.prodname_classroom %} 配合使用](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)”。

{% endnote %} {% endif %}

默认情况下，代码空间只能访问从中创建它的存储库。 如果希望组织中的 codespace 能够访问 codespace 创建者可以访问的其他组织存储库，请参阅“[管理组织 codespace 的存储库访问](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)”。

## 选择可以创建会对组织进行计费的 codespace 的人员

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. 在“计费”下，择以下选项之一：

   * 已禁用 - 不会因使用 codespace 对组织进行计费。 为组织存储库创建的 {% data variables.product.prodname_codespaces %} 会向创建它们的个人用户进行计费。
   * 所选成员 - 由所选成员为组织存储库创建的 {% data variables.product.prodname_codespaces %} 会对组织进行计费。
   * 所有成员 - 由组织成员为组织存储库创建的 {% data variables.product.prodname_codespaces %} 会对组织进行计费。
   * 所有成员和外部协作者 - 由组织成员和外部协作者为组织存储库创建的 {% data variables.product.prodname_codespaces %} 会对组织进行计费。

   ![“计费”的单选按钮](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   注意：选择“所有成员和外部协作者”时，所有已添加到特定存储库的外部协作者都可以对这些存储库创建和使用 {% data variables.product.prodname_codespaces %}，这种使用会对组织进行计费。 有关管理外部协作者的详细信息，请参阅“[关于外部协作者](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)”。

   {% endnote %}

1. 单击“ **保存**”。
1. 如果选择了“所选成员”，则会显示一个输入框，以供你输入要选择的用户的名称。

   ![用于选择用户的输入框](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## 为组织禁用 {% data variables.product.prodname_codespaces %}

可以阻止创建和使用可对组织进行计费的 codespace。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. 在“计费”下，选择“已禁用”。

## 设置支出限制

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。
