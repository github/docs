---
title: 限制在组织中更改仓库可见性
intro: 为保护组织的数据，您可以配置在组织中更改仓库可见性的权限。
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099704'
---
可以限制谁能够更改组织中的存储库可见性，例如将存储库从专用存储库更改为公共存储库。 有关存储库可见性的详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。 

你可以将更改存储库可见性的权限仅限于组织所有者，或者允许具有存储库管理员权限的任何人也可以更改存储库可见性。

{% warning %}

警告：如果启用，此设置将允许具有管理员权限的人员为现有存储库选择任何可见性，即使你不允许创建该类型的存储库也是如此。 有关在创建期间限制存储库可见性的详细信息，请参阅“[限制组织中的存储库创建](/articles/restricting-repository-creation-in-your-organization)”。

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. 在“存储库可见性更改”下，取消选中“允许成员更改此组织的存储库可见性”。
![用于允许成员更改存储库可见性的复选框](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. 单击“保存” 。
