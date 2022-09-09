---
title: 更改组织依赖项洞察图的可见性
intro: 您可以允许所有组织成员查看组织的依赖项洞察图或仅限组织所有者查看。
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Change insight visibility
ms.openlocfilehash: f6647993672ee56de8c1b8698b1fcdb0dc84147f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097332'
---
组织所有者可设置查看组织依赖项洞察图的限制。 默认情况下，组织的所有成员都可以查看组织依赖项洞察图。

{% ifversion ghec %} 企业所有者可以为查看企业帐户中所有组织的组织依赖项见解设置限制。 有关详细信息，请参阅“[为企业中的依赖项见解强制实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”。
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. 在“成员组织权限”下，选中或取消选中“允许成员查看依赖项见解”。
![允许成员查看见解的复选框](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. 单击“保存” 。
