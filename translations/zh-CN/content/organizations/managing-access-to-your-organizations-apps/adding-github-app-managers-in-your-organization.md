---
title: 为组织添加 GitHub 应用程序管理员
intro: '组织所有者可授权用户管理组织拥有的某些或所有 {% data variables.product.prodname_github_apps %}。'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add GitHub App managers
ms.openlocfilehash: d8389c85c847b750bdb83eb8b922ad16bfa33bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127503'
---
有关 {% data variables.product.prodname_github_app %} 管理员权限的详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)”。

## 授权某人管理组织拥有的所有 {% data variables.product.prodname_github_apps %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. 在“管理”下，键入要指定为组织中 {% data variables.product.prodname_github_app %} 管理员的人员，然后单击“授权”。
![添加 {% data variables.product.prodname_github_app %} 管理员](/assets/images/help/organizations/add-github-app-manager.png)

## 授权某人管理个别 {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. 在 "{% data variables.product.prodname_github_apps %}" 下，单击要为其添加 {% data variables.product.prodname_github_app %} 管理员的应用程序的头像。
![选择 {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. 在“应用管理员”下，键入要指定为应用的 GitHub 应用管理员的人员，然后单击“授权”。
![添加特定应用的 {% data variables.product.prodname_github_app %} 管理员](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## 延伸阅读

- [关于 {% data variables.product.prodname_dotcom %} 市场](/articles/about-github-marketplace/) {% endif %}
