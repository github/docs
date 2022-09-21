---
title: 添加外部协作者到组织的仓库
intro: 您可以允许不属于您组织成员的人员访问您的组织拥有的仓库。
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: caac79aba845f433effd3a3461e739d07cee135b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127483'
---
## 关于外部协作者

外部协作者是指不是您组织的成员，但有权访问您组织的一个或多个仓库的人员。 您可以选择要为每个外部协作者授予的访问权限级别。 {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} 使用 {% data variables.product.prodname_ghe_cloud %} 的组织可以限制邀请协作者的能力。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[设置添加外部协作者的权限](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”。
{% else %} 组织所有者可以限制邀请协作者的能力。 有关详细信息，请参阅“[设置添加外部协作者的权限](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”。
{% endif %}

{% ifversion ghes %} 要将某人添加为存储库的外部协作者，此人必须在 {% data variables.product.product_location %} 上拥有个人帐户。 如果您的企业使用外部身份验证系统（如 SAML 或 LDAP），则要添加的人员必须通过该系统登录才能创建帐户。 如果此人无权访问身份验证系统，并且为你的企业启用了内置身份验证，则网站管理员可以为该人员创建个人帐户。 有关详细信息，请参阅“[配置内置身份验证](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)”。
{% endif %}

{% ifversion not ghae %} 如果你的组织需要双因素身份验证，则在接受你的邀请以在存储库上进行协作之前，所有外部协作者都必须启用双因素身份验证。 有关详细信息，请参阅“[要求在组织中进行双因素身份验证](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)”。
{% endif %}

## 添加外部协作者到仓库

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 你可以在存储库设置中授予外部协作者对存储库的访问权限。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)”。 {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. 在左侧边栏中，单击“协作者和团队”。
  ![突出显示协作者和团队的“存储库设置”侧边栏](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. 在“协作者”下，键入要授权其访问存储库的人员的名称，然后单击“添加协作者”。
![在搜索字段中输入了 Octocat 用户名的“协作者”部分](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 在新协作者的姓名旁边，使用下拉菜单并选择适当的访问权限级别。
![存储库权限选择器](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}
