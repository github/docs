---
title: 审查组织安装的集成
intro: 您可以审查组织安装的集成的权限级别，并配置每个集成对组织仓库的访问权限。
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127517"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在边栏的“集成”部分，单击“{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}”。
{% else %}
1. 在左侧边栏中，单击“已安装的 {% data variables.product.prodname_github_apps %}”。
  ![组织设置边栏中的“已安装的 {% data variables.product.prodname_github_apps %}”选项卡](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. 在要审阅的 {% data variables.product.prodname_github_app %} 旁边，单击“配置”。
  ![“配置”按钮](/assets/images/help/organizations/configure-installed-integration-button.png)
6. 审查 {% data variables.product.prodname_github_app %}的权限和仓库访问权限。
  ![授予 {% data variables.product.prodname_github_app %} 对所有存储库或特定存储库的访问权限的选项](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - 若要授予 {% data variables.product.prodname_github_app %} 对所有组织存储库的访问权限，请选择“所有存储库”。
    - 若要选择特定存储库以授予应用程序访问权限，请选择“仅选择存储库”，然后键入存储库名。
7. 单击“保存” 。
